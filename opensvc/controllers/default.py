# coding: utf8

#########################################################################
## This is a samples controller
## - index is the default action of any application
## - user is required for authentication and authorization
## - download is for downloading files uploaded in the db (does streaming)
## - call exposes all registered services (none by default)
#########################################################################  

def index():
    """
    example action using the internationalization operator T and flash
    rendered by views/default/index.html or views/generic.html
    """
    return dict(message=T('Select a report type'))


def user():
    """
    exposes:
    http://..../[app]/default/user/login 
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    """
    return dict(form=auth())

def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    session.forget()
    return service()

def _where(query, table, var, field, tableid=None):
    if query is None:
        if tableid is not None:
            query = (tableid > 0)
        else:
            query = (db[table].id > 0)
    if var is None: return query
    if len(var) == 0: return query

    if '&' in var and '|' in var:
        """don't even try to guess order
        """
        return query

    done = False

    if '&' in var[1:]:
        i = var.index('&')
        chunk = var[:i]
        var = var[i:]
    elif '|' in var[1:]:
        i = var.index('|')
        chunk = var[:i]
        var = var[i:]
    else:
        done = True
        chunk = var

    if chunk[0] == '|':
        _or=True
        chunk = chunk[1:]
    elif chunk[0] == '&':
        _or=False
        chunk = chunk[1:]
    else:
        _or=False

    if chunk[0] == '!':
        _not = True
        chunk = chunk[1:]
    else:
        _not = False

    if chunk == 'empty':
        q = db[table][field]==None
    elif chunk[0] not in '<>=':
        q = db[table][field].like(chunk)
    else:
        _op = chunk[0]
        chunk = chunk[1:]
        if _op == '>':
            q = db[table][field]>chunk
        elif _op == '<':
            q = db[table][field]<chunk
        elif _op == '=':
            q = db[table][field]==chunk

    if _not:
        q = ~q

    if _or:
        query |= q
    else:
        query &= q

    if not done:
        query = _where(query, table, var, field)

    return query

@auth.requires_login()
def svcmon():
    query = _where(None, 'v_svcmon_ext', request.vars.svcname, 'mon_svcname')
    query &= _where(None, 'v_svcmon_ext', request.vars.svctype, 'mon_svctype')
    query &= _where(None, 'v_svcmon_ext', request.vars.containerstatus, 'mon_containerstatus')
    query &= _where(None, 'v_svcmon_ext', request.vars.ipstatus, 'mon_ipstatus')
    query &= _where(None, 'v_svcmon_ext', request.vars.fsstatus, 'mon_fsstatus')
    query &= _where(None, 'v_svcmon_ext', request.vars.diskstatus, 'mon_diskstatus')
    query &= _where(None, 'v_svcmon_ext', request.vars.overallstatus, 'mon_overallstatus')
    query &= _where(None, 'v_svcmon_ext', request.vars.svcapp, 'svc_app')
    query &= _where(None, 'v_svcmon_ext', request.vars.containertype, 'svc_containertype')
    query &= _where(None, 'v_svcmon_ext', request.vars.nodename, 'mon_nodname')
    query &= _where(None, 'v_svcmon_ext', request.vars.nodetype, 'mon_nodtype')
    query &= _where(None, 'v_svcmon_ext', request.vars.mon_updated, 'mon_updated')
    rows = db(query).select(orderby=db.v_svcmon_ext.mon_svcname)
    return dict(services=rows, vars=request.vars)

def svcmon_csv():
    import gluon.contenttype
    response.headers['Content-Type']=gluon.contenttype.contenttype('.csv')
    return svcmon()

@auth.requires_login()
def svcactions():
    query = _where(None, 'SVCactions', request.vars.svcname, 'svcname')
    query &= _where(None, 'SVCactions', request.vars.id, 'id')
    query &= _where(None, 'SVCactions', request.vars.action, 'action')
    query &= _where(None, 'SVCactions', request.vars.status, 'status')
    query &= _where(None, 'SVCactions', request.vars.time, 'time')
    query &= _where(None, 'SVCactions', request.vars.begin, 'begin')
    query &= _where(None, 'SVCactions', request.vars.end, 'end')
    query &= _where(None, 'SVCactions', request.vars.hostname, 'hostname')
    query &= _where(None, 'SVCactions', request.vars.status_log, 'status_log')
    query &= _where(None, 'SVCactions', request.vars.pid, 'pid')
    rows = db(query).select(orderby="SVCactions.begin DESC")
    return dict(actions=rows, vars=request.vars)

def svcactions_rss():
    #return BEAUTIFY(request)
    import gluon.contrib.rss2 as rss2
    import datetime
    d = svcactions()
    url = request.url[:-4]
    items = []
    desc = 'filtering options for this feed: '
    for key in request.vars.keys():
        if request.vars[key] != '': desc += key+'['+request.vars[key]+'] '
    for action in d['actions']:
        items += [rss2.RSSItem(title="""[osvc] %s %s returned %s"""%(action.action,action.svcname,action.status),
                      link = """http://%s%s?id==%s"""%(request.env.http_host,url,action.id),
                      description="""<b>id:</b> %s<br><b>begin:</b> %s<br>%s"""%(action.begin,action.id,action.status_log))]
    rss = rss2.RSS2(title="OpenSVC actions",
                link = """http://%s%s?%s"""%(request.env.http_host,url,request.env.query_string),
                description = desc,
                lastBuildDate = datetime.datetime.now(),
                items = items
    )
    response.headers['Content-Type']='application/rss+xml'
    return rss2.dumps(rss)

def svcactions_csv():
    import gluon.contenttype
    response.headers['Content-Type']=gluon.contenttype.contenttype('.csv')
    return svcactions()

@auth.requires_login()
def services():
    rows = db().select(db.services.ALL)
    return dict(services=rows)

class ex(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

@auth.requires_membership('Manager')
def _drplan_clone_project(request):
    prj_rows = db(db.drpprojects.drp_project==request.vars.cloneproject).select(db.drpprojects.drp_project_id)
    if len(prj_rows) != 0:
        response.flash = "project '%s' already exists" % request.vars.cloneproject
        return
    db.drpprojects.insert(drp_project=request.vars.cloneproject)
    q = db.drpprojects.drp_project==request.vars.cloneproject
    dst_prj = db(q).select(db.drpprojects.drp_project_id)[0]
    q = db.drpservices.drp_project_id==request.vars.prjlist
    src_prj_rows = db(q).select(db.drpservices.drp_project_id,
                                db.drpservices.drp_svcname,
                                db.drpservices.drp_wave,)
    for row in src_prj_rows:
        db.drpservices.insert(drp_svcname=row.drp_svcname,
                              drp_wave=row.drp_wave,
                              drp_project_id=dst_prj.drp_project_id)
    q = db.drpprojects.drp_project_id==request.vars.prjlist
    src_prj = db(q).select(db.drpprojects.drp_project)[0]
    response.flash = "project '%s' cloned from '%s'. %s services DR configurations ported to the new project"%(request.vars.cloneproject, src_prj.drp_project, str(len(src_prj_rows)))
    request.vars.prjlist = str(dst_prj.drp_project_id)
    del request.vars.cloneproject

@auth.requires_membership('Manager')
def _drplan_add_project(request):
    prj_rows = db(db.drpprojects.drp_project==request.vars.addproject).select(db.drpprojects.drp_project_id)
    if len(prj_rows) != 0:
        response.flash = "project '%s' already exists" % request.vars.addproject
        return
    db.drpprojects.insert(drp_project=request.vars.addproject)
    response.flash = "project '%s' created" % request.vars.addproject
    q = db.drpprojects.drp_project==request.vars.addproject
    dst_prj = db(q).select(db.drpprojects.drp_project_id)[0]
    request.vars.prjlist = str(dst_prj.drp_project_id)
    del request.vars.addproject

@auth.requires_membership('Manager')
def _drplan_del_project(request):
    db(db.drpprojects.drp_project_id == request.vars.prjlist).delete()
    num_deleted = db(db.drpservices.drp_project_id == request.vars.prjlist).delete()
    response.flash = "project deleted. %d services DR configurations dropped." % num_deleted

@auth.requires_membership('Manager')
def _drplan_set_wave(request):
    svcs = ([])
    for key in [ k for k in request.vars.keys() if 'check_' in k ]:
        svcs += ([key[6:]])
    for svc in svcs:
        if request.vars.setwave == "del":
                query = (db.drpservices.drp_svcname == svc)&(db.drpservices.drp_project_id == request.vars.prjlist)
                db(query).delete()
        else:
            try:
                db.drpservices.insert(drp_svcname=svc, drp_wave=request.vars.setwave, drp_project_id=request.vars.prjlist)
            except:
                query = (db.drpservices.drp_svcname == svc)&(db.drpservices.drp_project_id == request.vars.prjlist)
                db(query).update(drp_wave=request.vars.setwave)

@auth.requires_login()
def drplan():
    if request.vars.cloneproject is not None and request.vars.cloneproject != '':
        _drplan_clone_project(request)
    elif request.vars.addproject is not None and request.vars.addproject != '':
        _drplan_add_project(request)
    elif request.vars.delproject is not None and request.vars.delproject != '':
        _drplan_del_project(request)
    elif request.vars.setwave is not None and request.vars.setwave != '':
        _drplan_set_wave(request)

    query = _where(None, 'services', request.vars.svc_name, 'svc_name')
    query &= _where(None, 'services', request.vars.svc_app, 'svc_app')
    query &= _where(None, 'services', request.vars.svc_type, 'svc_type')
    query &= _where(None, 'services', request.vars.svc_drptype, 'svc_drptype')
    query &= _where(None, 'services', request.vars.svc_autostart, 'svc_autostart')
    query &= _where(None, 'services', request.vars.svc_nodes, 'svc_nodes')
    query &= _where(None, 'services', request.vars.svc_drpnode, 'svc_drpnode')
    query &= _where(None, 'services', request.vars.svc_drpnodes, 'svc_drpnodes')
    query &= _where(None, 'drpservices', request.vars.svc_wave, 'drp_wave', tableid=db.services.id)
    svc_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave,
db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name)
    prj_rows = db().select(db.drpprojects.drp_project_id, db.drpprojects.drp_project)
    return dict(services=svc_rows, projects=prj_rows, vars=request.vars)

def drplan_csv():
    import gluon.contenttype
    response.headers['Content-Type']=gluon.contenttype.contenttype('.csv')
    return drplan()

@auth.requires_login()
def drplan_set_wave():
    return dict(vars=request.vars)

def _drplan_scripts_header(phase):
    l = ["""#!/bin/sh"""]
    l += ["""if [ "`id -u`" != "0" ] ; then echo excute this script as root ; exit 1 ; fi"""]
    l += ["""echo Confirm excution of the '%s' disaster recovery phase"""%phase]
    l += ["""echo Type 'GO' to confirm"""]
    l += ["""read confirm"""]
    l += ["""if [ "$confirm" != "GO" ] ; then echo "aborted" ; exit 0 ; fi"""]
    l += ["""rm -f ~root/authorized_keys"""]
    l += ["""cat - <<EOF >/tmp/ssh_config_drp || exit 1"""]
    l += ['StrictHostKeyChecking=no']
    l += ['ForwardX11=no']
    l += ['PasswordAuthentication=no']
    l += ['ConnectTimeout=10']
    l += ['EOF']
    l += ['']
    return l

def _scripts(rows, title, action, service=False):
    ssh = '/usr/bin/ssh -F /tmp/ssh_config_drp'
    cmd = '/service/bin/svcmgr'
    lines = _drplan_scripts_header(title)
    for row in rows:
        _cmd = ' '.join([ssh, row.services.svc_drpnode, '--'])
        if service:
            _cmd += """ %s --service %s %s"""%(cmd, row.services.svc_name, action)
        else:
            _cmd += """ %s %s"""%(cmd, action)
        lines += ["""echo %s"""%_cmd]
        lines += [_cmd+' >/dev/null 2>&1 &']
    lines += ['']
    sh = '\n'.join(lines)
    nodes_nb = len(rows)
    return (sh, nodes_nb)

@auth.requires_login()
def drplan_scripts():
    q_dev_drptype = (db.services.svc_drptype=='DEV')
    q_drpnode_is_set = (db.services.svc_drpnode!=None)
    q_drpnode_is_set &= (db.services.svc_drpnode!='')
    q_autostart_is_set = (db.services.svc_autostart!=None)
    q_autostart_is_set &= (db.services.svc_autostart!='')
    p = {}

    """stop/start DEV
    """
    query = q_dev_drptype & q_drpnode_is_set
    dev_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_drpnode)
    (sh, node_nb) = _scripts(dev_rows, 'STOP DEV', 'stop')
    p['stopdev'] =  dict(action='stop', phase='DEV', sh=sh, node_nb=node_nb, shname='00_stop_dev.sh')
    (sh, node_nb) = _scripts(dev_rows, 'START DEV', 'startdev')
    p['startdev'] =  dict(action='start', phase='DEV', sh=sh, node_nb=node_nb, shname='15_start_dev.sh')

    """stop/start PRD
    """
    query = q_autostart_is_set & q_drpnode_is_set
    prd_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_autostart)
    (sh, node_nb) = _scripts(prd_rows, 'STOP PRD', 'stop')
    p['stopprd'] =  dict(action='stop', phase='PRD', sh=sh, node_nb=node_nb, shname='01_stop_prd.sh')

    wquery = query & (db.drpservices.drp_wave==0)
    prd_rows = db(wquery).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_autostart))
    (sh, node_nb) = _scripts(prd_rows, 'START PRD WAVE 0', 'start')
    p['startprd0'] =  dict(action='start', phase='PRD WAVE 0', sh=sh, node_nb=node_nb, shname='11_start_prd0.sh')

    wquery = query & (db.drpservices.drp_wave==1)
    prd_rows = db(wquery).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_autostart))
    (sh, node_nb) = _scripts(prd_rows, 'START PRD WAVE 1', 'start')
    p['startprd1'] =  dict(action='start', phase='PRD WAVE 1', sh=sh, node_nb=node_nb, shname='12_start_prd1.sh')

    wquery = query & (db.drpservices.drp_wave==2)
    prd_rows = db(wquery).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_autostart))
    (sh, node_nb) = _scripts(prd_rows, 'START PRD WAVE 2', 'start')
    p['startprd2'] =  dict(action='start', phase='PRD WAVE 2', sh=sh, node_nb=node_nb, shname='13_start_prd2.sh')

    wquery = query & (db.drpservices.drp_wave==3)
    prd_rows = db(wquery).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_autostart))
    (sh, node_nb) = _scripts(prd_rows, 'START PRD WAVE 3', 'start')
    p['startprd3'] =  dict(action='start', phase='PRD WAVE 3', sh=sh, node_nb=node_nb, shname='14_start_prd3.sh')

    """stop/start DR
    """
    query = q_drpnode_is_set
    dr_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_drpnode)
    (sh, node_nb) = _scripts(dr_rows, 'STOP DR', 'stop')
    p['stopdr'] =  dict(action='stop', phase='DR', sh=sh, node_nb=node_nb, shname='10_stop_dr.sh')

    query = q_drpnode_is_set & (db.drpservices.drp_wave==0)
    dr_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_drpnode))
    (sh, node_nb) = _scripts(dr_rows, 'START DR WAVE 0', 'start', service=True)
    p['startdr0'] =  dict(action='start', phase='DR WAVE 0', sh=sh, node_nb=node_nb, shname='02_start_dr0.sh')

    query = q_drpnode_is_set & (db.drpservices.drp_wave==1)
    dr_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_drpnode))
    (sh, node_nb) = _scripts(dr_rows, 'START DR WAVE 1', 'start', service=True)
    p['startdr1'] =  dict(action='start', phase='DR WAVE 1', sh=sh, node_nb=node_nb, shname='03_start_dr1.sh')

    query = q_drpnode_is_set & (db.drpservices.drp_wave==2)
    dr_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_drpnode))
    (sh, node_nb) = _scripts(dr_rows, 'START DR WAVE 2', 'start', service=True)
    p['startdr2'] =  dict(action='start', phase='DR WAVE 2', sh=sh, node_nb=node_nb, shname='04_start_dr2.sh')

    query = q_drpnode_is_set & (db.drpservices.drp_wave==3)
    dr_rows = db(query).select(db.services.ALL, db.drpservices.drp_wave, db.drpservices.drp_project_id, left=db.drpservices.on((db.services.svc_name==db.drpservices.drp_svcname)&(db.drpservices.drp_project_id==request.vars.prjlist)),groupby=db.services.svc_name,orderby=(db.services.svc_drpnode))
    (sh, node_nb) = _scripts(dr_rows, 'START DR WAVE 3', 'start', service=True)
    p['startdr3'] =  dict(action='start', phase='DR WAVE 3', sh=sh, node_nb=node_nb, shname='05_start_dr3.sh')

    return dict(p=p)

def _drplan_script_write(fpath, buff):
    import os
    f = open(fpath, 'w')
    f.write(buff)
    f.close()
    os.chmod(fpath, 0755)
    return fpath

def drplan_scripts_archive():
    import os
    import tarfile
    import tempfile
    import gluon.contenttype
    r = drplan_scripts()
    p = r['p']
    dir = tempfile.mkdtemp()
    olddir = os.getcwd()
    os.chdir(dir)
    tarpath = "dr_scripts.tar"
    tar = tarfile.open(tarpath, "w")
    for key in p.keys():
        _drplan_script_write(p[key]['shname'], p[key]['sh'])
        tar.add(p[key]['shname'])
    tar.close()
    response.headers['Content-Type']=gluon.contenttype.contenttype('.tar')
    f = open(tarpath, 'r')
    buff = f.read()
    f.close()
    for key in p.keys():
        os.unlink(p[key]['shname'])
    os.unlink(tarpath)
    os.chdir(olddir)
    os.rmdir(dir)
    return buff

@service.xmlrpc
def delete_services(hostid=None):
    if hostid is None:
        return 0
    db(db.services.svc_hostid==hostid).delete()
    return 0

@service.xmlrpc
def update_service(vars, vals):
    if 'svc_hostid' not in vars:
        return 0
    sql="""insert into services (%s) values (%s)""" % (','.join(vars), ','.join(vals))
    db.executesql(sql)
    return 0

@service.xmlrpc
def begin_action(vars, vals):
    sql="""insert delayed into SVCactions (%s) values (%s)""" % (','.join(vars), ','.join(vals))
    db.executesql(sql)
    return 0

@service.xmlrpc
def end_action(vars, vals):
    upd = []
    for a, b in zip(vars, vals):
        upd.append("%s=%s" % (a, b))
    sql="""insert delayed into SVCactions (%s) values (%s) on duplicate key update %s""" % (','.join(vars), ','.join(vals), ','.join(upd))
    db.executesql(sql)
    return 0

@service.xmlrpc
def svcmon_update(vars, vals):
    upd = []
    for a, b in zip(vars, vals):
        upd.append("%s=%s" % (a, b))
    sql="""insert delayed into svcmon (%s) values (%s) on duplicate key update %s""" % (','.join(vars), ','.join(vals), ','.join(upd))
    db.executesql(sql)
    db.commit()
    return 0

