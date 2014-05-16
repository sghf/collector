max_search_result = 10

@auth.requires_login()
def ajax_search():
    word = request.vars.search
    if word is None or len(word) == 0:
        return ''
    pattern = '%'+word+'%'

    svc = format_svc(pattern)
    node = format_node(pattern)
    vm = format_vm(pattern)
    user = format_user(pattern)
    app = format_app(pattern)

    if len(svc)+len(node)+len(user)+len(app)+len(vm) == 0:
        return ''

    return DIV(
             svc,
             node,
             vm,
             user,
             app,
           )

def format_app(pattern):
    o = db.v_svcmon.svc_app
    q = o.like(pattern)
    q = _where(q, 'v_svcmon', domain_perms(), 'mon_svcname')
    q = apply_gen_filters(q, ["v_svcmon"])
    rows = db(q).select(o, orderby=o, groupby=o, limitby=(0,max_search_result))
    n = len(db(q).select(o, groupby=o))

    if len(rows) == 0:
        return ''

    def format_row(row):
        d = TABLE(
              TR(
                TD(
                  IMG(_src=URL(r=request, c='static', f='svc.png')),
                ),
                TD(
                  P(
                    row.svc_app.upper()
                  ),
                  A(
                    T('status'),
                    _href=URL(r=request, c='default', f='svcmon',
                              vars={'svcmon_f_svc_app': row.svc_app,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('availability'),
                    _href=URL(r=request, c='svcmon_log', f='svcmon_log',
                              vars={'svcmon_log_f_svc_app': row.svc_app,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('application'),
                    _href=URL(r=request, c='apps', f='apps',
                              vars={'apps_f_app': row.svc_app,
                                    'clear_filters': 'true'})
                  ),
                ),
              ),
            )
        return d
    d = [H3(T('Applications'), ' (', n, ')')]
    for row in rows:
        d.append(format_row(row))
    return DIV(*d)

def format_svc(pattern):
    o = db.v_svcmon.mon_svcname
    q = o.like(pattern)
    q = _where(q, 'v_svcmon', domain_perms(), 'mon_svcname')
    q = apply_gen_filters(q, ["v_svcmon"])
    rows = db(q).select(o, orderby=o, groupby=o, limitby=(0,max_search_result))
    n = len(db(q).select(o, groupby=o))

    if len(rows) == 0:
        return ''

    def format_row(row):
        d = TABLE(
              TR(
                TD(
                  IMG(_src=URL(r=request, c='static', f='svc.png')),
                ),
                TD(
                  P(
                    row.mon_svcname.lower()
                  ),
                  A(
                    T('status'),
                    _href=URL(r=request, c='default', f='svcmon',
                              vars={'svcmon_f_mon_svcname': row.mon_svcname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('actions'),
                    _href=URL(r=request, c='svcactions', f='svcactions',
                              vars={'actions_f_svcname': row.mon_svcname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('availability'),
                    _href=URL(r=request, c='svcmon_log', f='svcmon_log',
                              vars={'svcmon_log_f_svc_name': row.mon_svcname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('checks'),
                    _href=URL(r=request, c='checks', f='checks',
                              vars={'checks_f_chk_svcname': row.mon_svcname,
                                    'clear_filters': 'true'})
                  ),
                ),
              ),
            )
        return d
    d = [H3(T('Services'), ' (', n, ')')]
    for row in rows:
        d.append(format_row(row))
    return DIV(*d)

def format_vm(pattern):
    o = db.v_svcmon.mon_vmname
    q = o.like(pattern)
    q = _where(q, 'v_svcmon', domain_perms(), 'mon_svcname')
    q = apply_gen_filters(q, ["v_svcmon"])
    rows = db(q).select(o, orderby=o, groupby=o, limitby=(0,max_search_result))
    n = len(db(q).select(o, groupby=o))

    if len(rows) == 0:
        return ''

    def format_row(row):
        d = TABLE(
              TR(
                TD(
                  IMG(_src=URL(r=request, c='static', f='svc.png')),
                ),
                TD(
                  P(
                    row.mon_vmname.lower()
                  ),
                  A(
                    T('status'),
                    _href=URL(r=request, c='default', f='svcmon',
                              vars={'svcmon_f_mon_vmname': row.mon_vmname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('availability'),
                    _href=URL(r=request, c='svcmon_log', f='svcmon_log',
                              vars={'svcmon_log_f_mon_vmname': row.mon_vmname,
                                    'clear_filters': 'true'})
                  ),
                ),
              ),
            )
        return d
    d = [H3(T('Virtual Machines'), ' (', n, ')')]
    for row in rows:
        d.append(format_row(row))
    return DIV(*d)

def format_node(pattern):
    o = db.v_nodes.nodename
    q = o.like(pattern)
    q = _where(q, 'v_nodes', domain_perms(), 'nodename')
    q = apply_gen_filters(q, ["v_nodes"])
    rows = db(q).select(o, orderby=o, groupby=o, limitby=(0,max_search_result))
    n = len(db(q).select(o, groupby=o))

    if len(rows) == 0:
        return ''

    def format_row(row):
        d = TABLE(
              TR(
                TD(
                  IMG(_src=URL(r=request, c='static', f='node16.png')),
                ),
                TD(
                  P(row.nodename.lower()),
                  A(
                    T('asset'),
                    _href=URL(r=request, c='nodes', f='nodes',
                              vars={'nodes_f_nodename': row.nodename,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('actions'),
                    _href=URL(r=request, c='svcactions', f='svcactions',
                              vars={'actions_f_hostname': row.nodename,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('services'),
                    _href=URL(r=request, c='default', f='svcmon',
                              vars={'svcmon_f_mon_nodname': row.nodename,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('checks'),
                    _href=URL(r=request, c='checks', f='checks',
                              vars={'checks_f_chk_nodename': row.nodename,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('compliance status'),
                    _href=URL(r=request, c='compliance', f='comp_status',
                              vars={'cs0_f_run_nodename': row.nodename,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('compliance log'),
                    _href=URL(r=request, c='compliance', f='comp_log',
                              vars={'ajax_comp_log_f_run_nodename':
row.nodename,
                                    'clear_filters': 'true'})
                  ),
                ),
              ),
            )
        return d
    d = [H3(T('Nodes'), ' (', n, ')')]
    for row in rows:
        d.append(format_row(row))
    return DIV(*d)

def format_user(pattern):
    o = db.v_users.fullname
    q = o.like(pattern)
    rows = db(q).select(o, orderby=o, groupby=o, limitby=(0,max_search_result))
    n = len(db(q).select(o, groupby=o))

    if len(rows) == 0:
        return ''

    def format_row(row):
        d = TABLE(
              TR(
                TD(
                  IMG(_src=URL(r=request, c='static', f='guy16.png')),
                ),
                TD(
                  P(row.fullname),
                  A(
                    T('user'),
                    _href=URL(r=request, c='users', f='users',
                              vars={'users_f_fullname': row.fullname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('logs'),
                    _href=URL(r=request, c='log', f='log',
                              vars={'log_f_log_user': row.fullname,
                                    'clear_filters': 'true'})
                  ),
                  A(
                    T('apps'),
                    _href=URL(r=request, c='apps', f='apps',
                              vars={'apps_f_responsibles': '%'+row.fullname+'%',
                                    'clear_filters': 'true'})
                  ),
                ),
              ),
            )
        return d
    d = [H3(T('Users'), ' (', n, ')')]
    for row in rows:
        d.append(format_row(row))
    return DIV(*d)


