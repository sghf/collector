try:
    cf = local_import('replication_config', reload=True)
except:
    cf = None

#
# Core routines
#
def digest_internal():
    data = {}
    sql = "select 'opensvc', table_name, unix_timestamp(table_modified) from table_modified"
    rows = db.executesql(sql)
    for row in rows:
        data[(row[0],row[1])] = row[2]
    return data

def merge_data(data, mirror=False):
    max = 500
    for table, (vars, vals) in data.items():
        if mirror:
            db.executesql("truncate %s"%table)
        while len(vals) > max:
            generic_insert(table, vars, vals[:max])
            vals = vals[max:]
        generic_insert(table, vars, vals)

def get_push_remotes():
    return get_remotes("push")

def get_pull_remotes():
    return get_remotes("pull")

def get_remotes(mode):
    if cf is None:
        return []
    remotes = set([])
    push_data = cf.repl_config.get(mode, [])
    if push_data is None or type(push_data) != list:
        return []
    for host in push_data:
        _remote = host.get("remote")
        if _remote is None:
            continue
        remotes.add(_remote)
    return list(remotes)

def get_pull_remote_tables(remote=None):
    return get_remote_tables("pull", remote=remote)

def get_push_remote_tables(remote=None):
    return get_remote_tables("push", remote=remote)

def get_remote_tables(mode, remote=None):
    if cf is None:
        return []
    tables = set([])
    push_data = cf.repl_config.get(mode, [])
    if push_data is None or type(push_data) != list:
        return []

    for host in push_data:
        _remote = host.get("remote")
        if _remote is None:
            continue
        if remote is not None and _remote != remote:
            continue
        push_tables = host.get("tables")
        if push_tables is None:
            continue
        for t in push_tables:
            schema = t.get("schema", "opensvc")
            name = t.get("name")
            if name is None:
                continue
            tables.add(_remote+"."+schema+"."+name)

    tables = list(tables)
    return tables

def get_push_tables():
    return get_tables("push")

def get_pull_tables():
    return get_tables("pull")

def get_tables(mode):
    if cf is None:
        return []
    tables = set([])
    data = cf.repl_config.get(mode, [])
    if data is None or type(data) != list:
        return []

    for host in data:
        _tables = host.get("tables")
        if _tables is None:
            continue
        for t in _tables:
            schema = t.get("schema", "opensvc")
            name = t.get("name")
            if name is None:
                continue
            tables.add(schema+"."+name)

    tables = list(tables)
    return tables

def pull_table_current_status(tables, remote):
    p = get_proxy(remote)
    return p.serve_table_current_status(tables)

def push_table_current_status(tables):
    return table_current_status(tables)

def table_current_status(tables):
    data = digest_internal()
    rows = []
    added_tables = []
    for (schema, name), pos in data.items():
        fullname = '.'.join((schema, name))
        if fullname not in tables:
            continue
        rows.append({
          "table_schema": schema,
          "table_name": name,
          "current_cksum": str(pos),
        })
        added_tables.append(fullname)

    for table in tables:
        if table in added_tables:
            continue
        schema, name = table.split('.')
        rows.append({
          "table_schema": schema,
          "table_name": name,
          "current_cksum": "0",
        })

    return rows

def pull_table_last_status(tables):
    return table_last_status(tables, "pull")

def push_table_last_status(tables):
    return table_last_status(tables, "push")

def table_last_status(tables, mode):
    tables = ','.join(map(lambda x: repr(x), tables))
    sql = """
     select
       remote,
       mode,
       table_schema,
       table_name,
       table_cksum as last_cksum,
       table_updated
     from
       replication_status
     where
       mode = "%(mode)s" and
       concat(table_schema, ".", table_name) in (%(tables)s)
    """ % dict(tables=tables, mode=mode)
    rows = db.executesql(sql, as_dict=True)
    return rows

def table_status():
    data = pull_table_status()
    data.update(push_table_status())
    return data

def pull_table_status():
    tables = get_pull_tables()
    last = pull_table_last_status(tables)

    d_last = {}
    for e in last:
        fullname = '.'.join((e['remote'], e['table_schema'], e['table_name']))
        d_last[fullname] = e

    data = {}

    for remote in get_pull_remotes():
        current = pull_table_current_status(tables, remote)

        d_current = {}
        for e in current:
            fullname = '.'.join((e['table_schema'], e['table_name']))
            d_current[fullname] = e

        for e in get_pull_remote_tables(remote):
            data[e] = get_table_status(e, d_current, d_last, mode="pull")

    return data

def push_table_status():
    tables = get_push_tables()
    last = push_table_last_status(tables)
    current = push_table_current_status(tables)

    d_current = {}
    for e in current:
        fullname = '.'.join((e['table_schema'], e['table_name']))
        d_current[fullname] = e

    d_last = {}
    for e in last:
        fullname = '.'.join((e['remote'], e['table_schema'], e['table_name']))
        d_last[fullname] = e

    data = {}
    for e in get_push_remote_tables():
        _data = get_table_status(e, d_current, d_last, mode="push")
        if _data is not None:
            data[e] = _data

    return data

def get_table_status(e, d_current, d_last, mode):
    _data = {}
    fullname = e[e.index('.')+1:]
    if fullname in d_current:
        _data.update(d_current[fullname])
    else:
        return

    if e in d_last:
        _data.update(d_last[e])
    else:
        _data.update({
         'remote': e.split(".")[0],
         'mode': mode,
         'last_cksum': None,
         'table_updated': None,
        })

    current_cksum = _data.get("current_cksum", "1")
    last_cksum = _data.get("last_cksum", "2")

    if current_cksum == "0" or current_cksum == last_cksum:
        _data['need_resync'] = "F"
    else:
        _data['need_resync'] = "T"

    return _data

def get_creds(remote):
    if cf is None:
        return None, None
    push_data = cf.repl_config.get("push", []) + cf.repl_config.get("pull", [])
    for d in push_data:
        _remote = d.get('remote')
        if _remote != remote:
            continue
        return d.get('user'), d.get('password')
    return None, None

def get_proxy(remote):
    user, password = get_creds(remote)
    import xmlrpclib
    xmlrpclib.Marshaller.dispatch[type(0L)] = lambda _, v, w: w("<value><i8>%d</i8></value>" % v)
    p = xmlrpclib.ServerProxy("https://%s:%s@%s/init/replication/call/xmlrpc" %
                               (user, password, remote), allow_none=True)
    return p

def rpc_pull(remote, sql):
    p = get_proxy(remote)
    return p.replication_pull(sql)

def rpc_push(remote, data, mirror):
    p = get_proxy(remote)
    return p.replication_push(data, mirror)

def get_common(remote, fullname, common):
    p = get_proxy(remote)
    return p.serve_common(fullname, common)

def get_table_columns(schema, name):
    sql = """
      SELECT
        `COLUMN_NAME`
      FROM
        `INFORMATION_SCHEMA`.`COLUMNS`
      WHERE
        `TABLE_SCHEMA`='%s' AND
        `TABLE_NAME`='%s'
    """ % (schema, name)
    rows = db.executesql(sql)
    columns = [ r[0] for r in rows ]
    return columns

def pull_all_table_from_all_remote(force=False):
    if cf is None:
        return
    start = datetime.datetime.now()
    ts = pull_table_status()

    pull_data = cf.repl_config.get("pull", [])
    if pull_data is None or type(pull_data) != list:
        return

    for host in pull_data:
        try:
            pull_all_table_from_remote(host, ts, force=force)
        except Exception as e:
            print e
        remote = host.get("remote")

def pull_all_table_from_remote(host, ts, force=False):
    remote = host.get("remote")
    if remote is None:
        return
    tables = host.get("tables")
    if tables is None:
        return
    for t in tables:
        data = {}
        filters = []

        fullname = ".".join((t['schema'], t['name']))
        rfullname = ".".join((remote, fullname))

        print "PULL", rfullname

        d = ts.get(rfullname)
        if d is None:
            print " ERROR: no rfullname in table_status entry. %s" % str(ts.keys())
            continue

        need_resync = d.get('need_resync')
        if not force and need_resync is not None and need_resync != 'T':
           print " + already synced"
           continue

        updated = t.get('updated')
        last_updated = d.get('table_updated')
        if updated is not None and last_updated is not None:
            updated_filter = "%s > '%s'" % (updated, last_updated)
            filters.append(updated_filter)
            print " - updated filter:", updated_filter

        columns = t.get('columns')
        if columns is None:
            columns = get_table_columns(d['table_schema'], d['table_name'])
        for s in ("ID", "Id", "id"):
            try:
                columns.remove(s)
            except:
                pass
        print " - columns:", ", ".join(columns)

        where = ""
        if len(filters) > 0:
           where = "where " + ' and '.join(filters)

        sql = """select %s from %s %s""" % (
         ','.join(map(lambda x: "`"+x+"`", columns)),
         fullname,
         where
        )
        try:
            rows = rpc_pull(remote, sql)
        except Exception as e:
            print e, sql
            raise
        print " + data received from %s (%d lines)" % (rfullname, len(rows))

        for i, row in enumerate(rows):
            rows[i] = list(row)

        data[fullname] = (columns, rows)
        try:
            merge_data(data)
            print " + merged. update replication status"
            update_last_pull(d)
        except:
            raise

def push_all_table_to_all_remote(force=False):
    if cf is None:
        return
    start = datetime.datetime.now()
    ts = push_table_status()

    push_data = cf.repl_config.get("push", [])
    if push_data is None or type(push_data) != list:
        return

    for host in push_data:
        try:
            push_all_table_to_remote(host, ts, force=force)
        except Exception as e:
            print e

def push_all_table_to_remote(host, ts, force=False):
    remote = host.get("remote")
    if remote is None:
        return
    tables = host.get("tables")
    if tables is None:
        return
    for t in tables:
        data = {}
        filters = []

        fullname = ".".join((t['schema'], t['name']))
        rfullname = ".".join((remote, fullname))

        print "PUSH", rfullname

        d = ts.get(rfullname)
        if d is None:
            continue

        need_resync = d.get('need_resync')
        if not force and need_resync is not None and need_resync != 'T':
           print " + already synced"
           continue

        mirror = t.get('mirror', False)

        updated = t.get('updated')
        last_updated = d.get('table_updated')
        if updated is not None and last_updated is not None:
            updated_filter = "%s > '%s'" % (updated, last_updated)
            filters.append(updated_filter)
            print " - updated filter:", updated_filter

        common = t.get('common')
        if common is not None:
            common_vals = get_common(remote, fullname, common)
            if len(common_vals) > 0:
                common_filter = "%s in (%s)" % (common, ",".join(map(lambda x: repr(x), common_vals)))
            else:
                common_filter = "1=2"
            filters.append(common_filter)
            print " - common filter:", common_filter

        columns = t.get('columns')
        if columns is None:
            columns = get_table_columns(d['table_schema'], d['table_name'])
            print " - columns:", ", ".join(columns)

        where = ""
        if len(filters) > 0:
           where = "where " + ' and '.join(filters)

        sql = """select %s from %s %s""" % (
         ','.join(map(lambda x: "`"+x+"`", columns)),
         fullname,
         where
        )
        try:
            rows = list(db.executesql(sql))
        except:
            print sql
            raise

        n = len(rows)
        if n == 0:
            print " + abort resync %s (%d lines)" % (rfullname, n)
            continue
        else:
            print " + resync %s (%d lines)" % (rfullname, n)
        for i, row in enumerate(rows):
            rows[i] = list(row)

        data[fullname] = (columns, rows)
        print " + data prepared. send."
        try:
            rpc_push(remote, data, mirror)
            print " + sent. update replication status"
            update_last_push(d)
        except Exception as e:
            #print " ERROR:", e
            raise

def force_resync_all():
    _resync_all(force=True)

def resync_all():
    _resync_all()

def _resync_all(force=False):
    push_all_table_to_all_remote(force=force)
    pull_all_table_from_all_remote(force=force)

def update_last_push(d):
    update_last(d, "push")

def update_last_pull(d):
    update_last(d, "pull")

def update_last(d, mode):
    import datetime
    vars = ["remote",
            "mode",
            "table_schema",
            "table_name",
            "table_cksum",
            "table_updated"]
    vals = [d["remote"],
            mode,
            d["table_schema"],
            d["table_name"],
            d["current_cksum"],
            datetime.datetime.now()]
    generic_insert("replication_status", vars, vals)

