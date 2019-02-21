import datetime
import xmlrpclib

def chunker(lst, length):
    i = -1
    for i in range(len(lst) // length):
        yield lst[i*length:(i+1)*length]
    yield lst[(i+1)*length:]

def value_wrap(a):
    return "%(a)s=values(%(a)s)"%dict(a=a)

def quote_wrap(x):
    if isinstance(x, bool):
        if x == True:
            return "'T'"
        else:
            return "'F'"
    elif isinstance(x, (int, long, float, complex)):
        return str(x)
    elif isinstance(x, datetime.datetime):
        return "'%s'"%str(x)
    elif isinstance(x, xmlrpclib.DateTime):
        return "'%s'" % str(datetime.datetime.strptime(x.value, "%Y%m%dT%H:%M:%S"))
    elif isinstance(x, (str, unicode)):
        if len(x) == 0:
            return "''"
        elif x.startswith("convert_tz("):
            return x
        elif x[0] == "'" and x[-1] == "'":
            return x
        elif x[0] == '"' and x[-1] == '"':
            return x
        elif x.startswith("unhex("):
            return x
        else:
            return "'%s'"%x.replace("'", "''")
    elif x is None:
        return "NULL"
    raise Exception("quote_wrap: unhandled type %s"%str(x.__class__))

def insert_multiline(table, vars, valsl, node_id=None, get_last_id=False):
    # convert agent time to server time
    if node_id:
        node = db(db.nodes.node_id==node_id).select(db.nodes.tz).first()
    else:
        node = None
    if node:
        tz = node.tz
        for col in ("begin", "end"):
            try:
                idx = vars.index(col)
                for i, v in enumerate(valsl):
                    v[idx] = 'convert_tz("%s", "%s", @@time_zone)' % (v[idx].strip("'"), tz)
                    valsl[i] = v
            except:
                pass

    value_wrap = lambda a: "%(a)s=values(%(a)s)"%dict(a=a)
    line_wrap = lambda x: "(%(x)s)"%dict(x=','.join(map(quote_wrap, x)))
    upd = map(value_wrap, vars)
    lines = map(line_wrap, valsl)
    sql="""insert into %s (%s) values %s on duplicate key update %s""" % (table, ','.join(vars), ','.join(lines), ','.join(upd))
    db.executesql(sql)
    if get_last_id:
        i = db.executesql("SELECT LAST_INSERT_ID()")[0][0]
        db.commit()
        return i
    db.commit()

def generic_insert(table, vars, vals, node_id=None, get_last_id=False):
    if len(vals) == 0:
        return
    elif isinstance(vals[0], (tuple, list)):
        i = insert_multiline(table, vars, vals, node_id=node_id, get_last_id=get_last_id)
    else:
        i = insert_multiline(table, vars, [vals], node_id=node_id, get_last_id=get_last_id)
    table_modified(table)
    return i


