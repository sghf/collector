def call():
    session.forget()
    return service()

handlers = {
  'GET': [
     rest_get_action_queue(),
     rest_get_action_queue_stats(),
     rest_get_action_queue_one(),
     rest_get_alerts(),
     rest_get_alert(),
     rest_get_apps(),
     rest_get_app(),
     rest_get_app_nodes(),
     rest_get_app_quotas(),
     rest_get_app_services(),
     rest_get_arrays(),
     rest_get_array(),
     rest_get_array_diskgroups(),
     rest_get_array_proxies(),
     rest_get_array_targets(),
     rest_get_compliance_status(),
     rest_get_compliance_status_one(),
     rest_get_dns_domains(),
     rest_get_dns_domain_records(),
     rest_get_dns_records(),
     rest_get_dns_record(),
     rest_get_filtersets(),
     rest_get_forms(),
     rest_get_form(),
     rest_get_groups(),
     rest_get_group(),
     rest_get_group_apps(),
     rest_get_group_nodes(),
     rest_get_group_services(),
     rest_get_group_users(),
     rest_get_ips(),
     rest_get_ip(),
     rest_get_networks(),
     rest_get_network(),
     rest_get_network_segments(),
     rest_get_network_segment(),
     rest_get_network_segment_responsibles(),
     rest_get_network_nodes(),
     rest_get_nodes(),
     rest_get_node(),
     rest_get_node_alerts(),
     rest_get_node_disks(),
     rest_get_node_checks(),
     rest_get_node_compliance_status(),
     rest_get_node_hbas(),
     rest_get_node_ips(),
     rest_get_node_services(),
     rest_get_node_service(),
     rest_get_scheduler_tasks(),
     rest_get_scheduler_task(),
     rest_get_scheduler_runs(),
     rest_get_scheduler_run(),
     rest_get_scheduler_workers(),
     rest_get_scheduler_worker(),
     rest_get_services(),
     rest_get_service(),
     rest_get_service_alerts(),
     rest_get_service_checks(),
     rest_get_service_disks(),
     rest_get_service_nodes(),
     rest_get_service_node(),
     rest_get_service_compliance_status(),
     rest_get_tags(),
     rest_get_tag(),
     rest_get_tag_nodes(),
     rest_get_tag_services(),
     rest_get_users(),
     rest_get_user(),
     rest_get_user_apps(),
     rest_get_user_nodes(),
     rest_get_user_services(),
     rest_get_user_groups(),
  ],
  'DELETE': [
     rest_delete_action_queue_one(),
     rest_delete_compliance_status_run(),
     rest_delete_dns_record(),
     rest_delete_group(),
     rest_delete_network(),
     rest_delete_network_segment(),
     rest_delete_network_segment_responsible(),
     rest_delete_node(),
     rest_delete_scheduler_task(),
     rest_delete_scheduler_run(),
     rest_delete_tag(),
     rest_delete_tag_node(),
     rest_delete_tag_service(),
  ],
  'POST': [
     rest_post_action_queue(),
     rest_post_action_queue_one(),
     rest_post_dns_records(),
     rest_post_dns_record(),
     rest_post_groups(),
     rest_post_group(),
     rest_post_networks(),
     rest_post_network(),
     rest_post_network_segments(),
     rest_post_network_segment_responsible(),
     rest_post_nodes(),
     rest_post_node(),
     rest_post_scheduler_task(),
     rest_post_scheduler_run(),
     rest_post_tags(),
     rest_post_tag_node(),
     rest_post_tag_service(),
  ],
  'PUT': [
     rest_put_form(),
  ],
}

def rest_router(action, args, vars):
    # the default restful wrapper suppress the trailing .xxx
    # we need it for fqdn nodenames and svcname though.
    args = request.raw_args.split('/')
    try:
        for handler in handlers[action]:
            if handler.match("/"+request.raw_args):
                return handler.handle(*args, **vars)
    except Exception as e:
        return dict(error=str(e))
    return dict(error="Unsupported api url")


@request.restful()
@auth.requires_login()
def api():
    def GET(*args, **vars):
        return rest_router("GET", args, vars)
    def POST(*args, **vars):
        return rest_router("POST", args, vars)
    def PUT(*args, **vars):
        return rest_router("PUT", args, vars)
    def DELETE(*args, **vars):
        return rest_router("DELETE", args, vars)
    return locals()

def doc_section():
    s = ""
    actions = [
      "GET",
      "DELETE",
      "POST",
      "PUT",
    ]
    for action in actions:
        for handler in handlers[action]:
            if handler.match_doc("/"+request.raw_args):
                s += handler.doc()
    return dict(doc=DIV(MARKMIN(s), _style="padding:1em;text-align:left"))

def doc():
    # the default restful wrapper suppress the trailing .xxx
    # we need it for fqdn nodenames and svcname though.
    args = request.raw_args.split('/')
    if len(args) > 0 and args != ['']:
        return doc_section()

    # doc index
    all_docs = {}
    for a in handlers:
        for handler in handlers[a]:
            if handler.path not in all_docs:
                all_docs[handler.path] = {}
            all_docs[handler.path][a] = handler.doc()

    s = """
# RESTful API documentation

"""
    actions = [
      "GET",
      "DELETE",
      "POST",
      "PUT",
    ]
    urls = sorted(all_docs.keys())
    s += "-----\n"
    for url in urls:
        l = []
        d = all_docs[url]
        l.append(url)
        for a in actions:
            if a in d:
                l.append("[[``%(a)s``:red %(url)s#%(anchor)s]]" % dict(a=a, url=URL(r=request, f="doc"+url), anchor=a))
            else:
                l.append("[[``%(a)s``:gray #]]" % dict(a=a))
        s += " | ".join(l)
        s += "\n"
    s += "-----\n"

    s += """
# Smart queries

Most API urls returning lists accept the ''query'' parameter, which value is a
web2py smart query.

A smart query is a filtering string like:

''os_name=linux and os_release contains 6.1''

Supported operators are:
- =, >, >=, <, <=
- equals, greater than, lesser than
- in aaa,bbb
- not


# Using the API with python

``
#!/usr/bin/python

import requests, json

requests.packages.urllib3.disable_warnings()

host = 'https://%(collector)s'
url = host + '/init/rest/api'

user = "%(email)s"
password = "mypass"
auth = (user, password)
verify=False

print "* post node"
data = {"nodename": "testnode", "model": "x1234", "team_responsible": "myteam"}
r = requests.post(url+"/nodes", data, auth=auth, verify=verify)
print r.content

print "* get node"
r = requests.get(url+"/nodes/testnode?props=nodename,os_name,model,updated",
auth=auth, verify=verify)
print r.content

print "* delete node"
r = requests.delete(url+"/nodes/testnode", auth=auth, verify=verify)
print r.content
``

""" % dict(
        email=user_email(),
        collector=request.env.http_host,
      )

    #return dict(doc=PRE(s, _style="padding:1em;text-align:left"))
    return dict(doc=DIV(MARKMIN(s), _style="padding:1em;text-align:left"))



