def _where(query, table, var, field, depth=0, db=db):
    if table not in db:
        return query
    if field not in db[table]:
        return query

    if depth == 0 and var and len(var) > 0 and var[0] == "|":
       var = var[1:]

    if query is None:
        query = (db[table].id >= 0)
    if var is None: return query
    if len(var) == 0: return query

    if '&' in var and '|' in var:
        """don't even try to guess order
        """
        return query

    done = False

    if var[0] == '|':
        _or=True
        var = var[1:]
    elif var[0] == '&':
        _or=False
        var = var[1:]
    else:
        _or=False

    if '&' in var:
        i = var.index('&')
        chunk = var[:i]
        var = var[i:]
    elif '|' in var:
        i = var.index('|')
        chunk = var[:i]
        var = var[i:]
    else:
        done = True
        chunk = var

    if len(chunk) == 0:
        return query

    if chunk[0] == '!':
        _not = True
        chunk = chunk[1:]
    else:
        _not = False

    if len(chunk) == 0:
        return query

    # initialize a restrictive filter
    q = db[table].id < 0

    if chunk == 'empty':
        q = (db[table][field]==None)|(db[table][field]=='')
    elif chunk[0] == '(' and chunk[-1] == ')' and len(chunk) > 2:
        chunk = chunk[1:-1]
        if field not in db[table]:
            pass
        q = db[table][field].belongs(chunk.split(','))
    elif chunk[0] not in '<>=':
        if field not in db[table]:
            pass
        elif db[table][field].type in ('string', 'text', 'date'):
            if '%' in chunk:
                q = db[table][field].like(chunk)
            else:
                q = db[table][field]==chunk
        elif db[table][field].type in ('id', 'integer'):
            try:
               c = int(chunk)
               q = db[table][field]==c
            except:
               pass
        elif db[table][field].type == 'float':
            try:
               c = float(chunk)
               q = db[table][field]==c
            except:
               pass
        elif db[table][field].type == 'boolean':
            if chunk in ('T', 't', "true", "True", True, "yes", "Yes", "YES", "Y", "y"):
               q = db[table][field]==True
            elif chunk == "%":
               q = db[table].id >= 0
            else:
               q = db[table][field]==False
    else:
        _op = chunk[0]

        if len(chunk) == 0:
            return query

        chunk = chunk[1:]

        if field not in db[table]:
            pass
        elif db[table][field].type in ('datetime', 'timestamp', 'date'):
            chunk = delta_to_date(chunk)

        if _op == '>':
            q = db[table][field]>chunk
        elif _op == '<':
            q = db[table][field]<chunk
        elif _op == '=':
            q = db[table][field]==chunk

    if _not:
        q = ~q

    if not done:
        q = _where(q, table, var, field, depth=depth+1)

    if _or:
        return query|q
    else:
        return query&q


