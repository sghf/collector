//
// cell decorators
//

var db_tables = {
  "packages": {
    "cl": "pkg16",
    "hide": false,
    "name": "packages",
    "title": "packages"
  },
  "v_tags": {
    "cl": "tag16",
    "hide": false,
    "name": "v_tags",
    "title": "tags"
  },
  "v_comp_moduleset_attachments": {
    "cl": "modset16",
    "hide": false,
    "name": "v_comp_moduleset_attachments",
    "title": "moduleset attachments"
  },
  "svcmon": {
    "cl": "svc",
    "hide": false,
    "name": "svcmon",
    "title": "service status"
  },
  "services": {
    "cl": "svc",
    "hide": false,
    "name": "services",
    "title": "services"
  },
  "b_disk_app": {
    "cl": "hd16",
    "hide": false,
    "name": "b_disk_app",
    "title": "disks"
  },
  "nodes": {
    "cl": "node16",
    "hide": false,
    "name": "nodes",
    "title": "nodes"
  },
  "apps": {
    "cl": "svc",
    "hide": false,
    "name": "apps",
    "title": "apps"
  },
  "resmon": {
    "cl": "action16",
    "hide": false,
    "name": "resmon",
    "title": "resources"
  },
  "node_hba": {
    "cl": "node16",
    "hide": false,
    "name": "node_hba",
    "title": "node host bus adapaters"
  }
}

var db_columns = {
  "loc_city": {
    "field": "loc_city",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "City",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_svcname": {
    "field": "mon_svcname",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service",
    "_class": "svcname",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_envdate": {
    "field": "svc_envdate",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Env file date",
    "_class": "",
    "table": "v_svcmon",
    "default_filter": ""
  },
  "mon_containerstatus": {
    "field": "mon_containerstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Container status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "cpu_dies": {
    "field": "cpu_dies",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU dies",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "assetname": {
    "field": "assetname",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Asset name",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "loc_country": {
    "field": "loc_country",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Country",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "cpu_vendor": {
    "field": "cpu_vendor",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU vendor",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_diskstatus": {
    "field": "mon_diskstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Disk status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "loc_building": {
    "field": "loc_building",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Building",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "team_responsible": {
    "field": "team_responsible",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guys16",
    "_dataclass": "",
    "title": "Team responsible",
    "_class": "groups",
    "table": "nodes",
    "default_filter": ""
  },
  "cpu_cores": {
    "field": "cpu_cores",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU cores",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "loc_rack": {
    "field": "loc_rack",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Rack",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "res_desc": {
    "field": "res_desc",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Description",
    "_class": "",
    "table": "",
    "default_filter": ""
  },
  "cpu_model": {
    "field": "cpu_model",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU model",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_devid": {
    "field": "disk_devid",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Array device Id",
    "_class": "pre",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "svc_flex_min_nodes": {
    "field": "svc_flex_min_nodes",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Flex min nodes",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "cpu_threads": {
    "field": "cpu_threads",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU threads",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_wave": {
    "field": "svc_wave",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Drp wave",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "disk_nodename": {
    "field": "disk_nodename",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hw16",
    "_dataclass": "",
    "title": "Nodename",
    "_class": "nodename",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "svc_containertype": {
    "field": "svc_containertype",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service mode",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "svc_ha": {
    "field": "svc_ha",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "HA",
    "_class": "svc_ha",
    "table": "v_services",
    "default_filter": ""
  },
  "svc_created": {
    "field": "svc_created",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Service creation date",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "mon_fsstatus": {
    "field": "mon_fsstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Fs status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "action_type": {
    "field": "action_type",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Action type",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_updated": {
    "field": "mon_updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last status update",
    "_class": "datetime_daily",
    "table": "svcmon",
    "default_filter": ""
  },
  "hw_obs_warn_date": {
    "field": "hw_obs_warn_date",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Hardware obsolescence warning date",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "power_breaker2": {
    "field": "power_breaker2",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power breaker #2",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "status": {
    "field": "status",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Status",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_vmem": {
    "field": "mon_vmem",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Vmem",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "mem_bytes": {
    "field": "mem_bytes",
    "filter_redirect": "",
    "force_filter": "",
    "img": "mem16",
    "_dataclass": "",
    "title": "Memory",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "power_protect_breaker": {
    "field": "power_protect_breaker",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power protector breaker",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "hvpool": {
    "field": "hvpool",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hv16",
    "_dataclass": "",
    "title": "Hypervisor pool",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_overallstatus": {
    "field": "mon_overallstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Status",
    "_class": "overallstatus",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_flex_cpu_high_threshold": {
    "field": "svc_flex_cpu_high_threshold",
    "filter_redirect": "",
    "force_filter": "",
    "img": "spark16",
    "_dataclass": "",
    "title": "Flex cpu high threshold",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "team_support": {
    "field": "team_support",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guys16",
    "_dataclass": "",
    "title": "Support",
    "_class": "groups",
    "table": "nodes",
    "default_filter": ""
  },
  "host_mode": {
    "field": "host_mode",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Host Mode",
    "_class": "env",
    "table": "nodes",
    "default_filter": ""
  },
  "enclosure": {
    "field": "enclosure",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Enclosure",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "responsibles": {
    "field": "responsibles",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guy16",
    "_dataclass": "",
    "title": "Responsibles",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "mon_vmtype": {
    "field": "mon_vmtype",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Container type",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "disk_vendor": {
    "field": "disk_vendor",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Disk Vendor",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "svc_cluster_type": {
    "field": "svc_cluster_type",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Cluster type",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "array_model": {
    "field": "array_model",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Array Model",
    "_class": "",
    "table": "stor_array",
    "default_filter": ""
  },
  "svc_autostart": {
    "field": "svc_autostart",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Primary node",
    "_class": "svc_autostart",
    "table": "v_services",
    "default_filter": ""
  },
  "mon_sharestatus": {
    "field": "mon_sharestatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Share status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "version": {
    "field": "version",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Agent version",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svcdisk_updated": {
    "field": "svcdisk_updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "System Updated",
    "_class": "datetime_daily",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "mem_slots": {
    "field": "mem_slots",
    "filter_redirect": "",
    "force_filter": "",
    "img": "mem16",
    "_dataclass": "",
    "title": "Memory slots",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_updated": {
    "field": "disk_updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "datetime_daily bluer",
    "title": "Storage Updated",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "os_obs_alert_date": {
    "field": "os_obs_alert_date",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "OS obsolescence alert date",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "warranty_end": {
    "field": "warranty_end",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Warranty end",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "last_boot": {
    "field": "last_boot",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last boot",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_guestos": {
    "field": "mon_guestos",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Guest OS",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "mon_svctype": {
    "field": "mon_svctype",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service type",
    "_class": "env",
    "table": "svcmon",
    "default_filter": ""
  },
  "loc_addr": {
    "field": "loc_addr",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Address",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "changed": {
    "field": "changed",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last change",
    "_class": "datetime_no_age",
    "table": "",
    "default_filter": ""
  },
  "modset_name": {
    "field": "modset_name",
    "filter_redirect": "",
    "force_filter": "",
    "img": "modset16",
    "_dataclass": "",
    "title": "Moduleset name",
    "_class": "",
    "table": "v_comp_moduleset_attachments",
    "default_filter": ""
  },
  "power_breaker1": {
    "field": "power_breaker1",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power breaker #1",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_hbstatus": {
    "field": "mon_hbstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Hb status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_drpnode": {
    "field": "svc_drpnode",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "DRP node",
    "_class": "nodename_no_os",
    "table": "v_services",
    "default_filter": ""
  },
  "hvvdc": {
    "field": "hvvdc",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hv16",
    "_dataclass": "",
    "title": "Virtual datacenter",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_raid": {
    "field": "disk_raid",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Raid",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "disk_used": {
    "field": "disk_used",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Disk Used",
    "_class": "numeric size_mb",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "svc_updated": {
    "field": "updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last service update",
    "_class": "datetime_daily",
    "table": "v_services",
    "default_filter": ""
  },
  "svcdisk_id": {
    "field": "svcdisk_id",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "System Disk Id",
    "_class": "disk_array",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "sec_zone": {
    "field": "sec_zone",
    "filter_redirect": "",
    "force_filter": "",
    "img": "fw16",
    "_dataclass": "",
    "title": "Security zone",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_app": {
    "field": "svc_app",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "App",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "app": {
    "field": "app",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Application code",
    "_class": "",
    "table": "apps",
    "default_filter": ""
  },
  "power_cabinet1": {
    "field": "power_cabinet1",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power cabinet #1",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "power_cabinet2": {
    "field": "power_cabinet2",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power cabinet #2",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_vcpus": {
    "field": "mon_vcpus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Vcpus",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_status": {
    "field": "svc_status",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service overall status",
    "_class": "status",
    "table": "v_services",
    "default_filter": ""
  },
  "disk_arrayid": {
    "field": "disk_arrayid",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Array Id",
    "_class": "disk_array",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "os_vendor": {
    "field": "os_vendor",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS vendor",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mailto": {
    "field": "mailto",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guy16",
    "_dataclass": "",
    "title": "Responsibles emails",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "svc_flex_cpu_low_threshold": {
    "field": "svc_flex_cpu_low_threshold",
    "filter_redirect": "",
    "force_filter": "",
    "img": "spark16",
    "_dataclass": "",
    "title": "Flex cpu low threshold",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "cpu_freq": {
    "field": "cpu_freq",
    "filter_redirect": "",
    "force_filter": "",
    "img": "cpu16",
    "_dataclass": "",
    "title": "CPU freq",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mem_banks": {
    "field": "mem_banks",
    "filter_redirect": "",
    "force_filter": "",
    "img": "mem16",
    "_dataclass": "",
    "title": "Memory banks",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "res_log": {
    "field": "res_log",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Log",
    "_class": "",
    "table": "",
    "default_filter": ""
  },
  "disk_id": {
    "field": "disk_id",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Disk Id",
    "_class": "pre",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "type": {
    "field": "type",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Type",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "enclosureslot": {
    "field": "enclosureslot",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Enclosure Slot",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_type": {
    "field": "svc_type",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service type",
    "_class": "env",
    "table": "v_services",
    "default_filter": ""
  },
  "svc_envfile": {
    "field": "svc_envfile",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Env file",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "hba_type": {
    "field": "hba_type",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Hba type",
    "_class": "",
    "table": "node_hba",
    "default_filter": ""
  },
  "hv": {
    "field": "hv",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hv16",
    "_dataclass": "",
    "title": "Hypervisor",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_vmname": {
    "field": "mon_vmname",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Container name",
    "_class": "nodename_no_os",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_availstatus": {
    "field": "svc_availstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service availability status",
    "_class": "status",
    "table": "v_services",
    "default_filter": ""
  },
  "disk_level": {
    "field": "disk_level",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Level",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "svc_drptype": {
    "field": "svc_drptype",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "DRP type",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "os_concat": {
    "field": "os_concat",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS full name",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_status_updated": {
    "field": "svc_status_updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Status updated",
    "_class": "datetime_status",
    "table": "services",
    "default_filter": ""
  },
  "disk_name": {
    "field": "disk_name",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Disk Name",
    "_class": "pre",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "listener_port": {
    "field": "listener_port",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Listener port",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "environnement": {
    "field": "environnement",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Env",
    "_class": "env",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_nodname": {
    "field": "mon_nodname",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Node",
    "_class": "nodename",
    "table": "svcmon",
    "default_filter": ""
  },
  "svc_drpnodes": {
    "field": "svc_drpnodes",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "DRP nodes",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "svc_nodes": {
    "field": "svc_nodes",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Nodes",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "err": {
    "field": "err",
    "filter_redirect": "",
    "force_filter": "",
    "img": "action16",
    "_dataclass": "",
    "title": "Action errors",
    "_class": "svc_action_err",
    "table": "v_svcmon",
    "default_filter": ""
  },
  "os_obs_warn_date": {
    "field": "os_obs_warn_date",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "OS obsolescence warning date",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_name": {
    "field": "svc_name",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service",
    "_class": "svcname",
    "table": "v_services",
    "default_filter": ""
  },
  "disk_created": {
    "field": "disk_created",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "bluer",
    "title": "Storage Created",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "loc_room": {
    "field": "loc_room",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Room",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "project": {
    "field": "project",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Project",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "loc_floor": {
    "field": "loc_floor",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "Floor",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_availstatus": {
    "field": "mon_availstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Availability status",
    "_class": "availstatus",
    "table": "svcmon",
    "default_filter": ""
  },
  "app_team_ops": {
    "field": "app_team_ops",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guys16",
    "_dataclass": "",
    "title": "Ops team",
    "_class": "",
    "table": "apps",
    "default_filter": ""
  },
  "disk_dg": {
    "field": "disk_dg",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "System disk group",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "os_kernel": {
    "field": "os_kernel",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS kernel",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "updated": {
    "field": "updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Updated",
    "_class": "datetime_status",
    "table": "",
    "default_filter": ""
  },
  "fqdn": {
    "field": "fqdn",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Fqdn",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_svcname": {
    "field": "disk_svcname",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Service",
    "_class": "svcname",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "mon_frozen": {
    "field": "mon_frozen",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Frozen",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "mon_containerpath": {
    "field": "mon_containerpath",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Container path",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "mon_ipstatus": {
    "field": "mon_ipstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Ip status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "id": {
    "field": "id",
    "filter_redirect": "",
    "force_filter": "",
    "img": "columns",
    "_dataclass": "",
    "title": "Id",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_hostid": {
    "field": "svc_hostid",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Host id",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "disk_model": {
    "field": "disk_model",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Disk Model",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "os_arch": {
    "field": "os_arch",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS arch",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "node_updated": {
    "field": "node_updated",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last node update",
    "_class": "datetime_daily",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_comment": {
    "field": "svc_comment",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Comment",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "role": {
    "field": "role",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Role",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "team_integ": {
    "field": "team_integ",
    "filter_redirect": "",
    "force_filter": "",
    "img": "guys16",
    "_dataclass": "",
    "title": "Integrator",
    "_class": "groups",
    "table": "nodes",
    "default_filter": ""
  },
  "power_supply_nb": {
    "field": "power_supply_nb",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power supply number",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "svc_flex_max_nodes": {
    "field": "svc_flex_max_nodes",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Flex max nodes",
    "_class": "",
    "table": "v_services",
    "default_filter": ""
  },
  "res_status": {
    "field": "res_status",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Status",
    "_class": "status",
    "table": "",
    "default_filter": ""
  },
  "rid": {
    "field": "rid",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Resource id",
    "_class": "",
    "table": "resmon",
    "default_filter": ""
  },
  "maintenance_end": {
    "field": "maintenance_end",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Maintenance end",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "loc_zip": {
    "field": "loc_zip",
    "filter_redirect": "",
    "force_filter": "",
    "img": "loc",
    "_dataclass": "",
    "title": "ZIP",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "app_domain": {
    "field": "app_domain",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "App domain",
    "_class": "",
    "table": "apps",
    "default_filter": ""
  },
  "os_name": {
    "field": "os_name",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS name",
    "_class": "os_name",
    "table": "nodes",
    "default_filter": ""
  },
  "nodename": {
    "field": "nodename",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hw16",
    "_dataclass": "",
    "title": "Nodename",
    "_class": "nodename",
    "table": "node_hba",
    "default_filter": ""
  },
  "power_protect": {
    "field": "power_protect",
    "filter_redirect": "",
    "force_filter": "",
    "img": "pwr",
    "_dataclass": "",
    "title": "Power protector",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_appstatus": {
    "field": "mon_appstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "App status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "mon_changed": {
    "field": "mon_changed",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Last status change",
    "_class": "",
    "table": "svcmon",
    "default_filter": ""
  },
  "disk_local": {
    "field": "disk_local",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Disk Local",
    "_class": "",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "disk_group": {
    "field": "disk_group",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Array disk group",
    "_class": "disk_array_dg",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "serial": {
    "field": "serial",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Serial",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "hw_obs_alert_date": {
    "field": "hw_obs_alert_date",
    "filter_redirect": "",
    "force_filter": "",
    "img": "time16",
    "_dataclass": "",
    "title": "Hardware obsolescence alert date",
    "_class": "date_future",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_size": {
    "field": "disk_size",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Disk Size",
    "_class": "numeric size_mb",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "disk_alloc": {
    "field": "disk_alloc",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "bluer",
    "title": "Disk Allocation",
    "_class": "numeric size_mb",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "description": {
    "field": "description",
    "filter_redirect": "",
    "force_filter": "",
    "img": "edit16",
    "_dataclass": "",
    "title": "Description",
    "_class": "",
    "table": "apps",
    "default_filter": ""
  },
  "tag_name": {
    "field": "tag_name",
    "filter_redirect": "",
    "force_filter": "",
    "img": "tag16",
    "_dataclass": "",
    "title": "Tag name",
    "_class": "",
    "table": "v_tags",
    "default_filter": ""
  },
  "os_release": {
    "field": "os_release",
    "filter_redirect": "",
    "force_filter": "",
    "img": "os16",
    "_dataclass": "",
    "title": "OS release",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "mon_syncstatus": {
    "field": "mon_syncstatus",
    "filter_redirect": "",
    "force_filter": "",
    "img": "svc",
    "_dataclass": "",
    "title": "Sync status",
    "_class": "status",
    "table": "svcmon",
    "default_filter": ""
  },
  "model": {
    "field": "model",
    "filter_redirect": "",
    "force_filter": "",
    "img": "node16",
    "_dataclass": "",
    "title": "Model",
    "_class": "",
    "table": "nodes",
    "default_filter": ""
  },
  "disk_region": {
    "field": "disk_region",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Disk Region",
    "_class": "pre",
    "table": "b_disk_app",
    "default_filter": ""
  },
  "hba_id": {
    "field": "hba_id",
    "filter_redirect": "",
    "force_filter": "",
    "img": "hd16",
    "_dataclass": "",
    "title": "Hba id",
    "_class": "",
    "table": "node_hba",
    "default_filter": ""
  }
}

var action_img_h = {
  'checks': 'check16',
  'enable': 'check16',
  'disable': 'nok',
  'pushservices': 'svc',
  'pushpkg': 'pkg16',
  'pushpatch': 'pkg16',
  'reboot': 'action_restart_16',
  'shutdown': 'action_stop_16',
  'syncservices': 'action_sync_16',
  'sync_services': 'action_sync_16',
  'updateservices': 'action16',
  'updatepkg': 'pkg16',
  'updatecomp': 'pkg16',
  'stop': 'action_stop_16',
  'stopapp': 'action_stop_16',
  'stopdisk': 'action_stop_16',
  'stopvg': 'action_stop_16',
  'stoploop': 'action_stop_16',
  'stopip': 'action_stop_16',
  'stopfs': 'action_stop_16',
  'umount': 'action_stop_16',
  'shutdown': 'action_stop_16',
  'boot': 'action_start_16',
  'start': 'action_start_16',
  'startstandby': 'action_start_16',
  'startapp': 'action_start_16',
  'startdisk': 'action_start_16',
  'startvg': 'action_start_16',
  'startloop': 'action_start_16',
  'startip': 'action_start_16',
  'startfs': 'action_start_16',
  'mount': 'action_start_16',
  'restart': 'action_restart_16',
  'provision': 'prov',
  'switch': 'action_switch_16',
  'freeze': 'frozen16',
  'thaw': 'frozen16',
  'sync_all': 'action_sync_16',
  'sync_nodes': 'action_sync_16',
  'sync_drp': 'action_sync_16',
  'syncall': 'action_sync_16',
  'syncnodes': 'action_sync_16',
  'syncdrp': 'action_sync_16',
  'syncfullsync': 'action_sync_16',
  'postsync': 'action_sync_16',
  'push': 'log16',
  'check': 'check16',
  'fixable': 'fixable16',
  'fix': 'comp16',
  'pushstats': 'spark16',
  'pushasset': 'node16',
  'stopcontainer': 'action_stop_16',
  'startcontainer': 'action_start_16',
  'stopapp': 'action_stop_16',
  'startapp': 'action_start_16',
  'prstop': 'action_stop_16',
  'prstart': 'action_start_16',
  'push': 'svc',
  'syncquiesce': 'action_sync_16',
  'syncresync': 'action_sync_16',
  'syncupdate': 'action_sync_16',
  'syncverify': 'action_sync_16',
  'toc': 'action_toc_16',
  'stonith': 'action_stonith_16',
  'switch': 'action_switch_16'
}


var os_class_h = {
  'darwin': 'os_darwin',
  'linux': 'os_linux',
  'hp-ux': 'os_hpux',
  'osf1': 'os_tru64',
  'opensolaris': 'os_opensolaris',
  'solaris': 'os_solaris',
  'sunos': 'os_solaris',
  'freebsd': 'os_freebsd',
  'aix': 'os_aix',
  'windows': 'os_win',
  'vmware': 'os_vmware'
}

var img_h = {
  'responsible': 'guys16',
  'publication': 'guys16',
  'form': 'wf16',
  'ack': 'check16',
  'action': 'action16',
  'action_queue': 'action16',
  'add': 'add16',
  'apps': 'svc',
  'attach': 'attach16',
  'auth': 'lock',
  'change': 'edit16',
  'check': 'check16',
  'checks': 'check16',
  'compliance': 'comp16',
  'contextual_settings': 'filter16',
  'delete': 'del16',
  'detach': 'detach16',
  'dns': 'dns16',
  'filterset': 'filter16',
  'filter': 'filter16',
  'group': 'guys16',
  'link': 'link16',
  'moduleset': 'action16',
  'module': 'action16',
  'networks': 'net16',
  'node': 'node16',
  'password': 'lock',
  'rename': 'edit16',
  'service': 'svc',
  'status': 'fa-status',
  'status': 'fa-status',
  'table_settings': 'settings',
  'table_filters': 'filter16',
  'update': 'edit16',
  'user': 'guy16',
  'users': 'guys16',
  'tag': 'tag16'
}

function cell_decorator_log_icons(e) {
  var v = $.data(e, "v")
  var line = $(e).parent(".tl")
  var action = $.data(line.children("[col=log_action]")[0], "v")
  var l = action.split(".")
  var span = $("<span></span>")
  span.attr("title", v)
  for (var i=0; i<l.length; i++) {
    var w = l[i]
    if (!(w in img_h)) {
      continue
    }
    var cl = img_h[w]
    var icon = $("<span class='iconlist'></span>")
    icon.addClass(cl+" icon")
    span.append(icon)
  }
  $(e).html(span)
}

function cell_decorator_boolean(e) {
  var v = $.data(e, "v")
  true_vals = [1, "1", "T", "True", "true", true]
  if (typeof v === "undefined") {
    var cl = ""
  } else if (true_vals.indexOf(v) >= 0) {
    var cl = "fa toggle-on"
  } else {
    var cl = "fa toggle-off"
  }
  s = "<span class='"+cl+"' title='"+v+"'></span>"
  $(e).html(s)
}

function cell_decorator_pct(e) {
  var v = $.data(e, "v")
  var dl = $("<div><div>")
  var dr = $("<div><div>")
  var dp = $("<div><div>")
  var d = $("<div><div>")
  dl.css({
    "font-size": "0px",
    "line-height": "0px",
    "height": "4px",
    "min-width": "0%",
    "max-width": v+"%",
    "width": v+"%",
    "background": "#A6FF80"
  })
  dr.css({
    "text-align": "left",
    "margin": "2px auto",
    "background": "#FF7863",
    "overflow": "hidden"
  })
  d.css({
    "margin": "auto",
    "text-align": "center",
    "width": "100%"
  })
  dp.text(v+"%")
  dr.append(dl)
  d.append([dr, dp])
  $(e).html(d)
}

function cell_decorator_app(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    app_tabs(id, {"app_name": v})
  })
}

function cell_decorator_dns_domain(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var domain_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    dns_domain_tabs(id, {"domain_id": domain_id, "domain_name": v})
  })
}

function cell_decorator_dns_record(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var record_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    dns_record_tabs(id, {"record_id": record_id, "record_name": v})
  })
}

function cell_decorator_disk_array_dg(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var array_name = $.data(line.children("[col=array_name],[col=disk_arrayid]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    diskgroup_tabs(id, {"array_name": array_name, "dg_name": v})
  })
}

function cell_decorator_disk_array(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    array_tabs(id, {"array_name": v})
  })
}

function cell_decorator_quota(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var quota_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    quota_tabs(id, {"quota_id": quota_id})
  })
}

function cell_decorator_prov_template(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var tpl_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    prov_template_tabs(id, {"tpl_id": tpl_id, "tpl_name": v})
  })
}

function cell_decorator_fset_name(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    return
  }
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    filterset_tabs(id, {"fset_name": v})
  })
}

function cell_decorator_modset_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    moduleset_tabs(id, {"modset_name": v})
  })
}

function cell_decorator_ruleset_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    ruleset_tabs(id, {"ruleset_name": v})
  })
}

function cell_decorator_report_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var report_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    report_tabs(id, {"report_id": report_id, "report_name": v})
  })
}

function cell_decorator_chart_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var chart_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    chart_tabs(id, {"chart_id": chart_id, "chart_name": v})
  })
}

function cell_decorator_metric_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var metric_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    metric_tabs(id, {"metric_id": metric_id, "metric_name": v})
  })
}

function cell_decorator_form_name(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var form_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    form_tabs(id, {"form_id": form_id, "form_name": v})
  })
}

function cell_decorator_network(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    var net_id = $.data(line.children("[col=id]")[0], "v")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    network_tabs(id, {"network_id": net_id})
  })
}

function cell_decorator_chk_instance(e) {
  var v = $.data(e, "v")
  var line = $(e).parent(".tl")
  var chk_type = $.data(line.children("[col=chk_type]")[0], "v")
  if (chk_type == "mpath") {
    url = services_get_url() + "/init/disks/disks?disks_f_disk_id="+v+"&volatile_filters=true"
    s = "<a class='icon hd16' href='"+url+"' target='_blank'>"+v+"</a>"
    $(e).html(s)
  }
}

function cell_decorator_chk_high(e) {
  var high = $.data(e, "v")
  var line = $(e).parent(".tl")
  var v = $.data(line.children("[col=chk_value]")[0], "v")
  var cl = []
  v = parseInt(v)
  high = parseInt(high)
  if (v > high) {
    cl.push("highlight")
  }
  $(e).html("<span class='"+cl.join(" ")+"'>"+high+"</span>")
}

function cell_decorator_chk_low(e) {
  var low = $.data(e, "v")
  var line = $(e).parent(".tl")
  var v = $.data(line.children("[col=chk_value]")[0], "v")
  var cl = []
  v = parseInt(v)
  low = parseInt(low)
  if (v < low) {
    cl.push("highlight")
  }
  $(e).html("<span class='"+cl.join(" ")+"'>"+low+"</span>")
}

function cell_decorator_chk_value(e) {
  var v = $.data(e, "v")
  var line = $(e).parent(".tl")
  var low = $.data(line.children("[col=chk_low]")[0], "v")
  var high = $.data(line.children("[col=chk_high]")[0], "v")
  var cl = []
  v = parseInt(v)
  low = parseInt(low)
  high = parseInt(high)
  if ((v > high) || (v < low)) {
    cl.push("highlight")
  }
  $(e).html("<span class='"+cl.join(" ")+"'>"+v+"</span>")
}

function cell_decorator_action_pid(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    $(e).empty()
    return
  }
  var s = "<a>"+v+"</a>"
  $(e).html(s)
  $(e).bind('click', function(){
    var line = $(e).parent(".tl")
    var hostname = $.data(line.children("[col=hostname]")[0], "v")
    var svcname = $.data(line.children("[col=svcname]")[0], "v")
    var begin = $.data(line.children("[col=begin]")[0], "v")
    var end = $.data(line.children("[col=end]")[0], "v")

    var _begin = begin.replace(/ /, "T")
    var d = new Date(+new Date(_begin) - 1000*60*60*24)
    begin = print_date(d)

    var _end = end.replace(/ /, "T")
    var d = new Date(+new Date(_end) + 1000*60*60*24)
    end = print_date(d)

    url = services_get_url() + "/init/svcactions/svcactions?actions_f_svcname="+svcname+"&actions_f_hostname="+hostname+"&actions_f_pid="+v+"&actions_f_begin=>"+begin+"&actions_f_end=<"+end+"&volatile_filters=true"

    $(this).children("a").attr("href", url)
    $(this).children("a").attr("target", "_blank")
    //$(this).children("a").click()
  })
}

function ackpanel(e, show, s){
    var panel = $("#ackpanel")
    if (panel.length == 0) {
      panel = $("<div id='ackpanel' class='ackpanel'></div>")
      $("#layout").append(panel)
    }
    var pos = get_pos(e)
    if (show) {
        panel.css({"left": pos[0] + "px", "top": pos[1] + "px"});
        panel.show();
    } else {
        panel.hide();
    }
    panel.html(s)
}

function cell_decorator_action_status(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    $(e).html("<div class='icon spinner'></div>")
    return
  }
  cl = ["status_"+v.replace(' ', '_')]
  var line = $(e).parent(".tl")
  var ack = $.data(line.children("[col=ack]")[0], "v")
  if (ack == 1) {
    cl.push("ack_1")
  }
  s = "<div class='"+cl.join(" ")+"'>"+v+"</diV>"
  $(e).html(s)
  if (ack != 1) {
    return
  }
  $(e).bind("mouseout", function(){
    ackpanel(event, false, "")
  })
  $(e).bind("mouseover", function(){
    var acked_date = $.data(line.children("[col=acked_date]")[0], "v")
    var acked_by = $.data(line.children("[col=acked_by]")[0], "v")
    var acked_comment = $.data(line.children("[col=acked_comment]")[0], "v")
    s = "<div>"
    s += "<b>acked by </b>"+acked_by+"<br>"
    s += "<b> on </b>"+acked_date+"<br>"
    s += "<b>with comment:</b><br>"+acked_comment
    s += "</div>"
    ackpanel(event, true, s)
  })
}

function cell_decorator_action_end(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    $(e).empty()
    return
  } else if (v == "1000-01-01 00:00:00") {
    $(e).html("<span class='highlight'>timed out</span>")
    return
  }
  var line = $(e).parent(".tl")
  var id = $.data(line.children("[col=id]")[0], "v")
  s = "<span class='highlight nowrap' id='spin_span_end_"+id+"'>"+v+"</span>"
}

function cell_decorator_action_log(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    $(e).empty()
    return
  }
  s = "<pre>"+v+"</pre>"
  $(e).html(s)
}

function cell_decorator_db_table_name(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    return
  }
  var s = $("<span class='nowrap'>"+v+"</span>")
  if (v in db_tables) {
    s.text(db_tables[v].title)
    s.addClass(db_tables[v].cl)
  }
  $(e).html(s)
}

function cell_decorator_db_column_name(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    return
  }
  var s = $("<span class='nowrap'>"+v+"</span>")
  if (v in db_columns) {
    s.text(db_columns[v].title)
    s.addClass(db_columns[v].img)
  }
  $(e).html(s)
}

function cell_decorator_action(e) {
  var v = $.data(e, "v")
  var line = $(e).parent(".tl")
  var status_log = $.data(line.children("[col=status_log]")[0], "v")
  cl = []
  if (status_log == "empty") {
    cl.push("metaaction")
  }
  action = v.split(/\s+/).pop()
  if (action in action_img_h) {
    cl.push(action_img_h[action])
  }
  s = "<div class='icon "+cl.join(" ")+"'>"+v+"</div>"
  $(e).html(s)
}

function cell_decorator_svc_action_err(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    $(e).empty()
    return
  }
  var line = $(e).parent(".tl")
  var svcname = $.data(line.children("[col=mon_svcname]")[0], "v")
  s = $("<a class='icon action16 icon-red clickable'>"+v+"</a>")
  s.click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_actions(d.attr("id"), {
	"volatile_filters": true,
	"request_vars": {
		"actions_f_svcname": svcname,
		"actions_f_status": "err",
		"actions_f_ack": "!1|empty",
		"actions_f_begin": ">-300d"
	}
    })
  })
  $(e).html(s)
}

function cell_decorator_nodename(e) {
  _cell_decorator_nodename(e, true)
}

function cell_decorator_nodename_no_os(e) {
  _cell_decorator_nodename(e, false)
}

function cell_decorator_obs_type(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  $(e).empty()
  div = $("<div class='nowrap'>"+v+"</div>")
  $(e).append(div)
  if (v == "os") {
      div.addClass("os16")
  } else if (v == "hw") {
      div.addClass("hw16")
  }
}

function _cell_decorator_nodename(e, os_icon) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  $(e).empty()
  $(e).append("<div class='a nowrap'>"+v+"</div>")
  $(e).addClass("corner")
  div = $(":first-child", e)
  if (os_icon) {
    try {
      os_cell = $(e).parent().children(".os_name")[0]
      os_c = os_class_h[$.data(os_cell, "v").toLowerCase()]
      div.addClass(os_c)
    } catch(e) {}
  }
  try {
    svc_autostart_cell = $(e).parent().children(".svc_autostart")[0]
    if ($.data(svc_autostart_cell, "v") == v) {
      div.addClass("b")
    }
  } catch(e) {}
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    node_tabs(id, {"nodename": v})
  })
}

function cell_decorator_groups(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  $(e).addClass("corner")
  l = v.split(', ')
  s = ""
  for (i=0; i<l.length; i++) {
    g = l[i]
    s += "<span>"+g+"</span>"
  }
  $(e).html(s)
  table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
  span_id = $(e).parent(".tl").attr("spansum")
  id = table_id + "_x_" + span_id
  $(e).children().each(function(){
    $(this).click(function(){
      if (get_selected() != "") {return}
      g = $(this).text()
      toggle_extra(null, id, e, 0)
      group_tabs(id, {"group_name": g})
    })
  })
}

function cell_decorator_user_id(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  var line = $(e).parent(".tl")
  var fullname = $.data(line.children("[col=fullname]")[0], "v")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    user_tabs(id, {"user_id": v, "fullname": fullname})
  })
}

function cell_decorator_username(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  var line = $(e).parent(".tl")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    user_tabs(id, {"fullname": v})
  })
}

function cell_decorator_svcname(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    return
  }
  $(e).empty()
  $(e).append("<div class='a nowrap'>"+v+"</div>")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    service_tabs(id, {"svcname": v})
  })
}

function cell_decorator_log_event(e) {
  var line = $(e).parent(".tl")
  var d = $.data(line.children("[col=log_dict]")[0], "v")
  var fmt = $.data(line.children("[col=log_fmt]")[0], "v")
  try {
    d = $.parseJSON(d)
  } catch(err) {
    $(e).html(i18n.t("decorators.corrupted_log"))
    return
  }
  for (key in d) {
    var re = RegExp("%\\("+key+"\\)[sd]", "g")
    fmt = fmt.replace(re, d[key])
  }
  $(e).html(fmt)
}

function cell_decorator_log_level(e) {
  var v = $.data(e, "v")
  t = {
    "warning": "boxed_small bgorange",
    "info": "boxed_small bggreen",
    "error": "boxed_small bgred",
  }
  if (v in t) {
    var cl = t[v]
  } else {
    var cl = "boxed_small bgblack"
  }
  $(e).html("<div class='"+cl+"'>"+v+"</div>")
}

function cell_decorator_status(e) {
  var v = $.data(e, "v")
  if ((v=="") || (v=="empty")) {
    v = "undef"
  }
  var c = v
  var line = $(e).parent(".tl")
  if (status_outdated(line)) {
    c = "undef"
  }
  t = {
    "warn": "orange",
    "up": "green",
    "stdby up": "green",
    "down": "red",
    "stdby down": "red",
    "undef": "gray",
    "n/a": "gray"
  }
  $(e).html("<div class='icon status_icon nowrap icon-"+t[c]+"'>"+v+"</div>")
}

function cell_decorator_dns_records_type(e) {
  var v = $.data(e, "v")
  var cl = ["boxed_small"]
  if ((v == "A") || (v == "PTR")) {
    cl.push("bgblack")
  } else if (v == "CNAME") {
    cl.push("bggreen")
  } else {
    cl.push("bgred")
  }
  var s = ""
  s = "<div class='"+cl.join(" ")+"'>"+v+"</div>"
  $(e).html(s)
}

function cell_decorator_svcmon_link_actions(e) {
  var s = $("<a class='icon action16 clickable'></a>")
  s.click(function(){
    var line = $(this).parents(".tl").first()
    var svcname = $.data(line.children("[col=mon_svcname]")[0], "v")
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_actions(d.attr("id"), {
        "volatile_filters": true,
        "request_vars": {
                "actions_f_svcname": svcname,
                "actions_f_status_log": "empty",
                "actions_f_begin": ">-7d"
        }
    })
  })
  return s
}

function cell_decorator_svcmon_link_frozen(e) {
  var line = $(e).parent(".tl")
  var mon_frozen = $.data(line.children("[col=mon_frozen]")[0], "v")
  if (mon_frozen == "1") {
    var s = $("<span class='icon frozen16'>&nbsp</span>")
  } else {
    var s = null
  }
  return s
}

function cell_decorator_svcmon_links(e) {
  $(e).html(
    cell_decorator_svcmon_link_actions(e),
    cell_decorator_svcmon_link_frozen(e)
  )
}

function cell_decorator_comp_log(e) {
  var line = $(e).parent(".tl")
  var module = $.data(line.find("[col=run_module]")[0], "v")
  var svcname = $.data(line.find("[col=run_svcname]")[0], "v")
  var nodename = $.data(line.find("[col=run_nodename]")[0], "v")
  $(e).empty()
  $(e).append("<div class='icon spark16'></div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    comp_log(id, {"module": module, "svcname": svcname, "nodename": nodename})
  })
}

function cell_decorator_comp_mod_log(e) {
  var line = $(e).parent(".tl")
  var modname = $.data(line.find("[col=mod_name]")[0], "v")
  $(e).empty()
  $(e).append("<div class='icon spark16'></div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/compliance/ajax_mod_history?modname="+modname+"&rowid="+id
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_comp_node_log(e) {
  var line = $(e).parent(".tl")
  var nodename = $.data(line.find("[col=node_name]")[0], "v")
  $(e).empty()
  $(e).append("<div class='icon spark16'></div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/compliance/ajax_node_history?nodename="+nodename+"&rowid="+id
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_comp_svc_log(e) {
  var line = $(e).parent(".tl")
  var svcname = $.data(line.find("[col=svc_name]")[0], "v")
  $(e).empty()
  $(e).append("<div class='icon spark16'></div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/compliance/ajax_svc_history?svcname="+svcname+"&rowid="+id
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_uid(e) {
  var v = $.data(e, "v")
  if (v=="") {
    return
  }
  $(e).empty()
  $(e).append("<div>"+v+"</div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/nodes/ajax_uid_dispatch?user_id="+v
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_gid(e) {
  var v = $.data(e, "v")
  if (v=="") {
    return
  }
  $(e).empty()
  $(e).append("<div>"+v+"</div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/nodes/ajax_gid_dispatch?group_id="+v
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_chk_type(e) {
  var v = $.data(e, "v")
  if (v=="") {
    return
  }
  $(e).empty()
  $(e).append("<div>"+v+"</div>")
  div = $(":first-child", e)
  div.addClass("a")
  div.addClass("nowrap")
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    url = services_get_url() + "/init/checks/ajax_chk_type_defaults/"+v
    toggle_extra(url, id, e, 0)
  })
}

function cell_decorator_dash_link_comp_tab(e) {
  var line = $(e).parent(".tl")
  var svcname = $.data(line.find("[col=dash_svcname]")[0], "v")
  var nodename = $.data(line.find("[col=dash_nodename]")[0], "v")
  s = "<div class='icon comp16 clickable'></div>"
  $(e).html(s)
  $(e).addClass("corner")
  if (svcname != "") {
    $(e).click(function(){
      table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      span_id = $(e).parent(".tl").attr("spansum")
      id = table_id + "_x_" + span_id
      toggle_extra(null, id, e, 0)
      service_tabs(id, {"svcname": svcname, "tab": "service_tabs.compliance"})
    })
  } else if (nodename != "") {
    $(e).click(function(){
      table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      span_id = $(e).parent(".tl").attr("spansum")
      id = table_id + "_x_" + span_id
      toggle_extra(null, id, e, 0)
      node_tabs(id, {"nodename": nodename, "tab": "node_tabs.compliance"})
    })
  }
}

function cell_decorator_dash_link_pkg_tab(e) {
  var line = $(e).parent(".tl")
  var svcname = $.data(line.find("[col=dash_svcname]")[0], "v")
  s = "<div class='icon pkg16 clickable'></div>"
  $(e).html(s)
  $(e).addClass("corner")
  if (svcname != "") {
    $(e).click(function(){
      table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      span_id = $(e).parent(".tl").attr("spansum")
      id = table_id + "_x_" + span_id
      toggle_extra(null, id, e, 0)
      service_tabs(id, {"svcname": svcname, "tab": "service_tabs.pkgdiff"})
    })
  }
}

function cell_decorator_dash_link_feed_queue(e) {
  s = "<a class='icon action16' href=''></a>"
  $(e).html(s)
}

function _cell_decorator_dash_link_actions(svcname, e) {
  s = $("<a class='icon action16 clickable'></a>")
  s.click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_actions(d.attr("id"), {
	"volatile_filters": true,
	"request_vars": {
		"actions_f_svcname": svcname,
		"actions_f_begin": ">-7d"
	}
    })
  })
  return s
}

function cell_decorator_obs_count(e) {
  var v = $.data(e, "v")
  $(e).addClass("corner")
  s = $("<a class='icon node16 clickable'>"+v+"</a>")
  $(e).empty().append(s)
  s.click(function(){
    if (get_selected() != "") {return}
    var line = $(this).parents(".tl").first()
    var obs_name = $.data(line.find("[col=obs_name]")[0], "v")
    var obs_type = $.data(line.find("[col=obs_type]")[0], "v")
    var options = {
	"volatile_filters": true,
	"request_vars": {}
    }
    if (obs_type == "hw") {
      options.request_vars.nodes_f_model = obs_name
    } else {
      options.request_vars.nodes_f_os_concat = obs_name
    }
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_nodes(d.attr("id"), options)
  })
}

function _cell_decorator_dash_link_action_error(svcname, e) {
  s = $("<a class='icon alert16 clickable'></a>")
  s.click(function(){
    if (get_selected() != "") {return}
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_actions(d.attr("id"), {
	"volatile_filters": true,
	"request_vars": {
		"actions_f_svcname": svcname,
		"actions_f_status": "err",
		"actions_f_ack": "!1|empty",
		"actions_f_begin": ">-30d"
	}
    })
  })
  return s
}

function cell_decorator_dash_link_action_error(e) {
  var line = $(e).parent(".tl")
  var svcname = $.data(line.find("[col=dash_svcname]")[0], "v")
  $(e).append(_cell_decorator_dash_link_action_error(svcname, e))
  $(e).append(_cell_decorator_dash_link_actions(svcname, e))
}

function cell_decorator_dash_link_svcmon(e) {
  var line = $(e).parent(".tl")
  var svcname = $.data(line.find("[col=dash_svcname]")[0], "v")
  s = "<div class='icon svc clickable'></div>"
  $(e).html(s)
  $(e).addClass("corner")
  if (svcname != "") {
    $(e).click(function(){
      table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      span_id = $(e).parent(".tl").attr("spansum")
      id = table_id + "_x_" + span_id
      toggle_extra(null, id, e, 0)
      service_tabs(id, {"svcname": svcname, "tab": "service_tabs.status"})
    })
  }
}

function cell_decorator_dash_link_node(e) {
  var line = $(e).parent(".tl")
  var nodename = $.data(line.find("[col=dash_nodename]")[0], "v")
  s = "<div class='icon node16 clickable'></div>"
  $(e).html(s)
  $(e).addClass("corner")
  if (nodename != "") {
    $(e).click(function(){
      table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      span_id = $(e).parent(".tl").attr("spansum")
      id = table_id + "_x_" + span_id
      toggle_extra(null, id, e, 0)
      node_tabs(id, {"nodename": nodename, "tab": "node_tabs.properties"})
    })
  }
}

function _cell_decorator_dash_link_checks(nodename) {
  url = services_get_url() + "/init/checks/checks?checks_f_chk_nodename="+nodename+"&volatile_filters=true"
  s = "<a class='icon check16 clickable' target='_blank' href='"+url+"'></a>"
  return s
}

function cell_decorator_dash_link_checks(e) {
  var line = $(e).parent(".tl")
  var nodename = $.data(line.find("[col=dash_nodename]")[0], "v")
  var s = ""
  s += _cell_decorator_dash_link_checks(nodename)
  $(e).html(s)
}

function _cell_decorator_dash_link_mac_networks(mac) {
  url = services_get_url() + "/init/nodenetworks/nodenetworks?nodenetworks_f_mac="+mac+"&volatile_filters=true"
  s = "<a class='icon net16 clickable' target='_blank' href='"+url+"'></a>"
  return s
}

function cell_decorator_dash_link_mac_duplicate(e) {
  var line = $(e).parent(".tl")
  var mac = $.data(line.find("[col=dash_entry]")[0], "v").split(" ")[1]
  var s = ""
  s += _cell_decorator_dash_link_mac_networks(mac)
  $(e).html(s)
}

function cell_decorator_dash_link_obsolescence(e, t) {
  $(e).empty().addClass("corner")
  s = $("<a class='icon obs16 clickable'></a>")
  s.click(function(){
    if (get_selected() != "") {return}
    var line = $(this).parents(".tl").first()
    var dash_entry = $.data(line.find("[col=dash_entry]")[0], "v")
    var name = dash_entry.match(/(.*) obsolete/)[1]
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    d = $("<table></table>")
    d.uniqueId()
    $("#"+id).empty().append(d)
    table_obsolescence(d.attr("id"), {
	"volatile_filters": true,
	"request_vars": {
		"obs_f_obs_name": name
	}
    })
  })
  $(e).append(s)
}

function cell_decorator_dash_links(e) {
  var line = $(e).parent(".tl")
  var dash_type = $.data(line.find("[col=dash_type]")[0], "v")
  if (dash_type == "action errors") {
    cell_decorator_dash_link_action_error(e)
  } else if ((dash_type == "node warranty expired") ||
             (dash_type == "node without warranty end date") ||
             (dash_type == "node without asset information") ||
             (dash_type == "node close to warranty end") ||
             (dash_type == "node information not updated")) {
    cell_decorator_dash_link_node(e)
  } else if ((dash_type == "check out of bounds") ||
             (dash_type == "check value not updated")) {
    cell_decorator_dash_link_checks(e)
  } else if (dash_type == "mac duplicate") {
    cell_decorator_dash_link_mac_duplicate(e)
  } else if ((dash_type == "service available but degraded") ||
             (dash_type == "service status not updated") ||
             (dash_type == "service configuration not updated") ||
             (dash_type == "service frozen") ||
             (dash_type == "flex error") ||
             (dash_type == "service unavailable")) {
    cell_decorator_dash_link_svcmon(e)
  } else if (dash_type == "feed queue") {
    cell_decorator_dash_link_feed_queue(e)
  } else if (dash_type.indexOf("os obsolescence") >= 0) {
    cell_decorator_dash_link_obsolescence(e, "os")
  } else if (dash_type.indexOf("obsolescence") >= 0) {
    cell_decorator_dash_link_obsolescence(e, "hw")
  } else if (dash_type.indexOf("comp") == 0) {
    cell_decorator_dash_link_comp_tab(e)
  } else if (dash_type.indexOf("package") == 0) {
    cell_decorator_dash_link_pkg_tab(e)
  }
}

function cell_decorator_action_cron(e) {
  var v = $.data(e, "v")
  var l = []
  if (v == 1) {
      l.push("time16")
  }
  $(e).html("<div class='"+l.join(" ")+"'></div>")
}

function cell_decorator_dash_severity(e) {
  var v = $.data(e, "v")
  var l = []
  if (v == 0) {
      l.push("alertgreen")
  } else if (v == 1) {
      l.push("alertorange")
  } else if (v == 2) {
      l.push("alertred")
  } else if (v == 3) {
      l.push("alertdarkred")
  } else {
      l.push("alertblack")
  }
  $(e).html("<div class='icon "+l.join(" ")+"' title='"+v+"'></div>")
}

function cell_decorator_form_id(e) {
  var v = $.data(e, "v")
  $(e).html("<span class='icon wf16 nowrap clickable'>"+v+"</span>")
  $(e).addClass("corner")
  $(e).click(function(){
    var line = $(this).parent(".tl")
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(null, id, e, 0)
    var table = $("<table></table>")
    table.uniqueId()
    $("#"+id).append(table)
    workflow(table.attr("id"), {"form_id": v})
  })
}

function cell_decorator_run_log(e) {
  var v = $.data(e, "v")
  if (typeof v === "undefined") {
    var s = ""
  } else {
    var s = "<pre>"+v.replace(/ERR:/g, "<span class='err'>ERR:</span>")+"</pre>"
  }
  $(e).html(s)
}

function cell_decorator_run_status(e) {
  var v = $.data(e, "v")
  var s = ""
  var cl = ""
  var _v = ""
  if (v == 0) {
    cl = "ok"
  } else if (v == 1) {
    cl = "nok"
  } else if (v == 2) {
    cl = "na"
  } else if (v == -15) {
    cl = "kill16"
  } else {
    _v = v
  }
  $(e).html("<div class='icon "+cl+"'>"+_v+"</div>")
}

function cell_decorator_tag_exclude(e) {
  var v = $.data(e, "v")
  if (v == "empty") {
    v = ""
  }
  $(e).html(v)
  $(window).bind("click", function() {
    $("input.tag_exclude").parent().html(v)
  })
  if (services_ismemberof(["Manager", "TagManager"])) {
    $(e).bind("click", function(event){
      event.stopPropagation()
      i = $("<input class='oi tag_exclude'></input>")
      var _v = $.data(this, "v")
      if (_v == "empty") {
        _v = ""
      }
      i.val(_v)
      i.bind("keyup", function(event){
        if (!is_enter(event)) {
          return
        }
        var tag_id = $.data($(this).parents(".tl").find("[name=tags_c_id]")[0], "v")
        var data = {
          "tag_exclude": $(this).val(),
        }
        var _i = $(this)
        services_osvcpostrest("R_TAG", [tag_id], "", data, function(jd) {
          if (jd.error && (jd.error.length > 0)) {
            $(".flash").show("blind").html(services_error_fmt(jd))
            return
          }
          _i.parent().html(data.tag_exclude)
        },
        function(xhr, stat, error) {
          $(".flash").show("blind").html(services_ajax_error_fmt(xhr, stat, error))
        })
      })
      $(e).empty().append(i)
      i.focus()
    })
  }
}

function cell_decorator_dash_entry(e) {
  var v = $.data(e, "v")
  var s = ""
  s = "<div class='clickable'>"+v+"</div>"
  $(e).html(s)
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    var line = $(e).parent(".tl")
    var nodename = $.data(line.children("[col=dash_nodename]")[0], "v")
    var svcname = $.data(line.children("[col=dash_svcname]")[0], "v")
    var dash_md5 = $.data(line.children("[col=dash_md5]")[0], "v")
    var dash_created = $.data(line.children("[col=dash_created]")[0], "v")
    var rowid = line.attr("cksum")
    url = services_get_url() + "/init/dashboard/ajax_alert_events?dash_nodename="+nodename+"&dash_svcname="+svcname+"&dash_md5="+dash_md5+"&dash_created="+dash_created+"&rowid="+rowid
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = line.attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(url, id, this, 0)
  })
}

function cell_decorator_rset_md5(e) {
  var v = $.data(e, "v")
  var s = ""
  s = "<div class='clickable'>"+v+"</div>"
  $(e).html(s)
  $(e).addClass("corner")
  $(e).click(function(){
    if (get_selected() != "") {return}
    url = services_get_url() + "/init/compliance/ajax_rset_md5?rset_md5="+v
    table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
    span_id = $(e).parent(".tl").attr("spansum")
    id = table_id + "_x_" + span_id
    toggle_extra(url, id, this, 0)
  })
}

function cell_decorator_action_q_ret(e) {
  var v = $.data(e, "v")
  var cl = ["boxed_small"]
  if (v == 0) {
    cl.push("bggreen")
  } else {
    cl.push("bgred")
  }
  var s = ""
  s = "<div class='"+cl.join(" ")+"'>"+v+"</div>"
  $(e).html(s)
}

function cell_decorator_action_q_status(e) {
  var v = $.data(e, "v")
  var st = ""
  var cl = ["boxed_small"]
  if (v == "T") {
    cl.push("bggreen")
    st = i18n.t("decorators.done")
  } else if (v == "R") {
    cl.push("bgred")
    st = i18n.t("decorators.running")
  } else if (v == "W") {
    st = i18n.t("decorators.waiting")
  } else if (v == "Q") {
    st = i18n.t("decorators.queued")
  } else if (v == "C") {
    cl.push("bgdarkred")
    st = i18n.t("decorators.cancelled")
  }
  var s = ""
  s = "<div class='"+cl.join(" ")+"'>"+st+"</div>"
  $(e).html(s)
}

function datetime_age(s) {
  // return age in minutes
  if (typeof s === 'undefined') {
    return
  }
  if (!s || (s == 'empty')) {
    return
  }
  s = s.replace(/ /, "T")+"Z"
  var d = new Date(s)
  var now = new Date()
  var delta = (now.getTime() - d.getTime())/60000 - now.getTimezoneOffset()
  return delta
}

function _outdated(s, max_age) {
  delta = datetime_age(s)
  if (!delta) {
    return true
  }
  if (delta > max_age) {
    return true
  }
  return false
}

function status_outdated(line) {
  var l = line.children("[cell=1][col=mon_updated]")
  if (l.length == 0) {
    l = line.children("[cell=1][col=svc_status_updated]")
  }
  if (l.length == 0) {
    l = line.children("[cell=1][col=status_updated]")
  }
  if (l.length == 0) {
    l = line.children("[cell=1][name$=_updated]")
  }
  if (l.length == 0) {
    return true
  }
  var s = $.data(l[0], "v")
  return _outdated(s, 15)
}

function cell_decorator_date_no_age(e) {
  v = $.data(e, "v")
  if (typeof v === 'undefined') {
    return
  }
  s = v.split(" ")[0]
  $(e).html(s)
}

function cell_decorator_datetime_no_age(e) {
  cell_decorator_datetime(e)
}

function cell_decorator_date_future(e) {
  cell_decorator_datetime(e)
}

function cell_decorator_datetime_status(e) {
  $(e).attr("max_age", 15)
  cell_decorator_datetime(e)
}

function cell_decorator_datetime_future(e) {
  cell_decorator_datetime(e)
}

function cell_decorator_datetime_daily(e) {
  $(e).attr("max_age", 1440)
  cell_decorator_datetime(e)
}

function cell_decorator_datetime_weekly(e) {
  $(e).attr("max_age", 10080)
  cell_decorator_datetime(e)
}

function cell_decorator_datetime(e) {
  var s = $.data(e, "v")
  var max_age = $(e).attr("max_age")
  var delta = datetime_age(s)

  if (!delta) {
    $(e).html()
    return
  }

  if (delta > 0) {
    var prefix = "-"
    var round = Math.ceil
  } else {
    var prefix = ""
    delta = -delta
    var round = Math.floor
  }

  var hour = 60
  var day = 1440
  var week = 10080
  var month = 43200
  var year = 524520

  if (delta < hour) {
    var cl = "minute icon"
    var text = prefix + i18n.t("table.minute", {"count": round(delta)})
    var color = "#000000"
  } else if (delta < day) {
    var cl = "hour icon"
    var text = prefix + i18n.t("table.hour", {"count": round(delta/hour)})
    var color = "#181818"
  } else if (delta < week) {
    var cl = "day icon "
    var text = prefix + i18n.t("table.day", {"count": round(delta/day)})
    var color = "#333333"
  } else if (delta < month) {
    var cl = "week icon "
    var text = prefix + i18n.t("table.week", {"count": round(delta/week)})
    var color = "#333333"
  } else if (delta < year) {
    var cl = "month icon"
    var text = prefix + i18n.t("table.month", {"count": round(delta/month)})
    var color = "#484848"
  } else {
    var cl = "year icon"
    var text = prefix + i18n.t("table.year", {"count": round(delta/year)})
    var color = "#666666"
  }

  if ($(e).text() == text) {
    return
  }
  cl += " nowrap"

  if (max_age && (delta > max_age)) {
    cl += " icon-red"
  }
  $(e).html("<div class='"+cl+"' style='color:"+color+"' title='"+s+"'>"+text+"</div>")
}

function cell_decorator_date(e) {
  cell_decorator_datetime(e)
  s = $.data(e, "v")
  $(e).text(s.split(" ")[0])
}

function cell_decorator_env(e) {
  if ($.data(e, "v") != "PRD") {
    return
  }
  s = "<div class='b'>PRD</div>"
  $(e).html(s)
}

function cell_decorator_svc_ha(e) {
  if ($.data(e, "v") != 1) {
    $(e).empty()
    return
  }
  s = "<div class='boxed_small'>HA</div>"
  $(e).html(s)
}

function cell_decorator_size_mb(e) {
  v = $.data(e, "v")
  if (v == "empty") {
    return
  }
  s = "<div class='nowrap'>"+fancy_size_mb(v)+"</div>"
  $(e).html(s)
}

function cell_decorator_size_b(e) {
  v = $.data(e, "v")
  if (v == "empty") {
    return
  }
  s = "<div class='nowrap'>"+fancy_size_b(v)+"</div>"
  $(e).html(s)
}

function cell_decorator_availstatus(e) {
  var line = $(e).parent(".tl")
  var mon_availstatus = $.data(e, "v")
  if (mon_availstatus=="") {
    return
  }
  var mon_containerstatus = $.data(line.children("[col=mon_containerstatus]")[0], "v")
  var mon_ipstatus = $.data(line.children("[col=mon_ipstatus]")[0], "v")
  var mon_fsstatus = $.data(line.children("[col=mon_fsstatus]")[0], "v")
  var mon_diskstatus = $.data(line.children("[col=mon_diskstatus]")[0], "v")
  var mon_sharestatus = $.data(line.children("[col=mon_sharestatus]")[0], "v")
  var mon_appstatus = $.data(line.children("[col=mon_appstatus]")[0], "v")

  if (status_outdated(line)) {
    var cl_availstatus = "status_undef"
    var cl_containerstatus = "status_undef"
    var cl_ipstatus = "status_undef"
    var cl_fsstatus = "status_undef"
    var cl_diskstatus = "status_undef"
    var cl_sharestatus = "status_undef"
    var cl_appstatus = "status_undef"
  } else {
    var cl_availstatus = mon_availstatus.replace(/ /g, '_')
    var cl_containerstatus = mon_containerstatus.replace(/ /g, '_')
    var cl_ipstatus = mon_ipstatus.replace(/ /g, '_')
    var cl_fsstatus = mon_fsstatus.replace(/ /g, '_')
    var cl_diskstatus = mon_diskstatus.replace(/ /g, '_')
    var cl_sharestatus = mon_sharestatus.replace(/ /g, '_')
    var cl_appstatus = mon_appstatus.replace(/ /g, '_')
  }
  var s = "<table>"
  s += "<tr>"
  s += "<td colspan=6 class=\"aggstatus status_" + cl_availstatus + "\">" + mon_availstatus + "</td>"
  s += "</tr>"
  s += "<tr>"
  s += "<td class=status_" + cl_containerstatus + ">vm</td>"
  s += "<td class=status_" + cl_ipstatus + ">ip</td>"
  s += "<td class=status_" + cl_fsstatus + ">fs</td>"
  s += "<td class=status_" + cl_diskstatus + ">dg</td>"
  s += "<td class=status_" + cl_sharestatus + ">share</td>"
  s += "<td class=status_" + cl_appstatus + ">app</td>"
  s += "</tr>"
  s += "</table>"
  $(e).html(s)
}

function cell_decorator_rsetvars(e) {
  var s = $.data(e, "v")
  $(e).html("<pre>"+s.replace(/\|/g, "\n")+"</pre>")
}

function cell_decorator_overallstatus(e) {
  var line = $(e).parent(".tl")
  var mon_overallstatus = $.data(e, "v")
  if (mon_overallstatus=="") {
    return
  }
  var mon_containerstatus = $.data(line.children("[col=mon_containerstatus]")[0], "v")
  var mon_availstatus = $.data(line.children("[col=mon_availstatus]")[0], "v")
  var mon_hbstatus = $.data(line.children("[col=mon_hbstatus]")[0], "v")
  var mon_syncstatus = $.data(line.children("[col=mon_syncstatus]")[0], "v")

  if (status_outdated(line)) {
    var cl_overallstatus = "status_undef"
    var cl_availstatus = "status_undef"
    var cl_syncstatus = "status_undef"
    var cl_hbstatus = "status_undef"
  } else {
    var cl_overallstatus = mon_overallstatus.replace(/ /g, '_')
    var cl_availstatus = mon_availstatus.replace(/ /g, '_')
    var cl_syncstatus = mon_syncstatus.replace(/ /g, '_')
    var cl_hbstatus = mon_hbstatus.replace(/ /g, '_')
  }

  var s = "<table>"
  s += "<tr>"
  s += "<td colspan=3 class=\"aggstatus status_" + cl_overallstatus + "\">" + mon_overallstatus + "</td>"
  s += "</tr>"
  s += "<tr>"
  s += "<td class=status_" + cl_availstatus + ">avail</td>"
  s += "<td class=status_" + cl_hbstatus + ">hb</td>"
  s += "<td class=status_" + cl_syncstatus + ">sync</td>"
  s += "</tr>"
  s += "</table>"
  $(e).html(s)
}

function cell_decorator_sql(e) {
  var s = $.data(e, "v")
  var _e = $("<pre></pre>")
  s = s.replace(/(SELECT|FROM|GROUP BY|WHERE)/gi, function(x) {
    return '<span class=syntax_red>'+x+'</span>'
  })
  s = s.replace(/(COUNT|DATE_SUB|SUM|MAX|MIN|CEIL|FLOOR|AVG|CONCAT|GROUP_CONCAT)/gi, function(x) {
    return '<span class=syntax_green>'+x+'</span>'
  })
  s = s.replace(/([\"\']\w*[\"\'])/gi, function(x) {
    return '<span class=syntax_blue>'+x+'</span>'
  })
  s = s.replace(/(%%\w+%%)/gi, function(x) {
    return '<span class=syntax_blue>'+x+'</span>'
  })
  _e.html(s)
  $(e).html(_e)
}

function cell_decorator_alert_type(e) {
  var s = $.data(e, "v")
  $(e).html(i18n.t("alert_type."+s))
}

function cell_decorator_tpl_command(e) {
  var s = $.data(e, "v")
  var _e = $("<pre></pre>")
  s = s.replace(/--provision/g, "<br><span class=syntax_blue>  --provision</span>")
  s = s.replace(/--resource/g, "<br><span class=syntax_blue>  --resource</span>")
  s = s.replace(/{/g, "{<br>      ")
  s = s.replace(/\",/g, "\",<br>     ")
  s = s.replace(/}/g, "<br>    }")
  s = s.replace(/(\(\w+\)s)/gi, function(x) {
    return '<span class=syntax_red>'+x+'</span>'
  })
  s = s.replace(/("\w+":)/gi, function(x) {
    return '<span class=syntax_green>'+x+'</span>'
  })
  _e.html(s)
  $(e).html(_e)
}

function cell_decorator_yaml(e) {
  var s = $.data(e, "v")
  var _e = $("<pre></pre>")
  s = s.replace(/Id:\s*(\w+)/gi, function(x) {
    return '<span class=syntax_red>'+x+'</span>'
  })
  s = s.replace(/(#\w+)/gi, function(x) {
    return '<span class=syntax_red>'+x+'</span>'
  })
  s = s.replace(/(\w+:)/gi, function(x) {
    return '<span class=syntax_green>'+x+'</span>'
  })
  _e.html(s)
  $(e).html(_e)
}

function cell_decorator_appinfo_key(e) {
  var s = $.data(e, "v")
  var _e = $("<div class='boxed_small'></div>")
  _e.text(s)
  if (s == "Error") {
    _e.addClass("bgred")
  } else {
    _e.addClass("bgblack")
  }
  $(e).html(_e)
}

function cell_decorator_appinfo_value(e) {
  var s = $.data(e, "v")
  var _e = $("<span></span>")
  _e.text(s)
  if (is_numeric(s)) {
    _e.addClass("icon spark16")
    $(e).addClass("corner clickable")
    $(e).bind("click", function() {
      var line = $(e).parent(".tl")
      var span_id = line.attr("spansum")
      var table_id = $(e).parents("table").attr("id").replace(/^table_/, '')
      var id = table_id + "_x_" + span_id
      var params = "svcname="+encodeURIComponent($.data(line.children("[col=app_svcname]")[0], "v"))
      params += "&nodename="+encodeURIComponent($.data(line.children("[col=app_nodename]")[0], "v"))
      params += "&launcher="+encodeURIComponent($.data(line.children("[col=app_launcher]")[0], "v"))
      params += "&key="+encodeURIComponent($.data(line.children("[col=app_key]")[0], "v"))
      params += "&rowid="+encodeURIComponent(id)
      var url = services_get_url() + "/init/appinfo/ajax_appinfo_log?" + params
 
      toggle_extra(url, id, e, 0)
    })
  }
  $(e).html(_e)
}

function cell_decorator_disks_charts(e) {
  var v = $.data(e, "v")
  var data = $.parseJSON(v)
  $(e).empty()
  if (data.chart_svc.data && data.chart_svc.data.length > 1) {
    var div = $("<div style='float:left;width:500px'></div>")
    var plot_div = $("<div id='chart_svc'></div>")
    var title = $("<h3></h3>")
    title.text(i18n.t("decorators.charts.services"))
    plot_div.text(JSON.stringify(data.chart_svc))
    div.append(title)
    div.append(plot_div)
    $(e).append(div)
  }
  if (data.chart_ap.data && data.chart_ap.data.length > 1) {
    var div = $("<div style='float:left;width:500px'></div>")
    var plot_div = $("<div id='chart_ap'></div>")
    var title = $("<h3></h3>")
    title.text(i18n.t("decorators.charts.apps"))
    plot_div.text(JSON.stringify(data.chart_ap))
    div.append(title)
    div.append(plot_div)
    $(e).append(div)
  }
  if (data.chart_dg.data && data.chart_dg.data.length > 1) {
    var div = $("<div style='float:left;width:500px'></div>")
    var plot_div = $("<div id='chart_dg'></div>")
    var title = $("<h3></h3>")
    title.text(i18n.t("decorators.charts.diskgroups"))
    plot_div.text(JSON.stringify(data.chart_dg))
    div.append(title)
    div.append(plot_div)
    $(e).append(div)
  }
  if (data.chart_ar.data && data.chart_ar.data.length > 1) {
    var div = $("<div style='float:left;width:500px'></div>")
    var plot_div = $("<div id='chart_ar'></div>")
    var title = $("<h3></h3>")
    title.text(i18n.t("decorators.charts.arrays"))
    plot_div.text(JSON.stringify(data.chart_ar))
    div.append(title)
    div.append(plot_div)
    $(e).append(div)
  }
  $(e).append("<div class='spacer'></div>")
  $(e).append("<div id='chart_info'>-</div>")
  plot_diskdonuts()
}

function cell_decorator_users_role(e) {
  var s = $.data(e, "v")
  $(e).empty()
  if (s == 1) {
    $(e).addClass("admin")
  } else {
    $(e).addClass("guy16")
  }
}

function cell_decorator_users_domain(e) {
  var s = $.data(e, "v")
  if (s == "empty") {
    s = ""
  }
  var span = $("<span class='clickable'></span>")
  var input = $("<input class='hidden oi'></input>")
  var line = $(e).parent(".tl")
  var user_id = $.data(line.children("[col=id]")[0], "v")

  if (services_ismemberof(["Manager", "UserManager"])) {
    $(e).hover(
      function() {
        span.addClass("editable")
      },
      function() {
        span.removeClass("editable")
      }
    )
  }
  span.bind("click", function() {
    span.hide()
    input.show()
    input.focus()
    input.select()
  })
  input.bind("blur", function(event) {
    span.show()
    input.hide()
  })
  input.bind("keyup", function(event) {
    if (!is_enter(event)) {
      return
    }
    data = {
      "domains": $(this).val()
    }
    services_osvcpostrest("R_USER_DOMAINS", [user_id], "", data, function(jd) {
      if (!jd.data) {
        span.html(services_error_fmt(jd))
        span.show()
        input.hide()
        return
      }
      span.text(input.val())
      span.show()
      input.hide()
    },
    function(xhr, stat, error) {
      span.html(services_ajax_error_fmt(xhr, stat, error))
      span.show()
      input.hide()
    })
  })

  span.text(s)
  input.val(s)
  $(e).empty()
  $(e).append(span)
  $(e).append(input)
}

function cell_decorator_rule_value(e) {
  var line = $(e).parent(".tl")
  $(e).uniqueId()
  var id = $(e).attr("id")
  var var_id = $.data(line.children("[col=id]")[0], "v")
  var rset_id = $.data(line.children("[col=ruleset_id]")[0], "v")
  var var_class = $.data(line.children("[col=var_class]")[0], "v")
  var encap = $.data(line.children("[col=encap_rset]")[0], "v")
  if (encap != "") {
    var disable_edit = true
  } else {
    var disable_edit = false
  }
  try {
    var data = $.parseJSON($.data(e, "v"))
  } catch(err) {
    var data = $.data(e, "v")
  }
  form(id, {
    "data": data,
    "var_id": var_id,
    "rset_id": rset_id,
    "display_mode": true,
    "digest": true,
    "form_name": var_class,
    "disable_edit": disable_edit
  })
}

cell_decorators = {
 "yaml": cell_decorator_yaml,
 "sql": cell_decorator_sql,
 "rsetvars": cell_decorator_rsetvars,
 "dash_entry": cell_decorator_dash_entry,
 "disk_array_dg": cell_decorator_disk_array_dg,
 "disk_array": cell_decorator_disk_array,
 "size_mb": cell_decorator_size_mb,
 "size_b": cell_decorator_size_b,
 "chk_instance": cell_decorator_chk_instance,
 "chk_value": cell_decorator_chk_value,
 "chk_low": cell_decorator_chk_low,
 "chk_high": cell_decorator_chk_high,
 "db_table_name": cell_decorator_db_table_name,
 "db_column_name": cell_decorator_db_column_name,
 "action": cell_decorator_action,
 "action_pid": cell_decorator_action_pid,
 "action_status": cell_decorator_action_status,
 "action_end": cell_decorator_action_end,
 "action_log": cell_decorator_action_log,
 "action_cron": cell_decorator_action_cron,
 "rset_md5": cell_decorator_rset_md5,
 "run_status": cell_decorator_run_status,
 "run_log": cell_decorator_run_log,
 "form_id": cell_decorator_form_id,
 "action_q_status": cell_decorator_action_q_status,
 "action_q_ret": cell_decorator_action_q_ret,
 "svcname": cell_decorator_svcname,
 "user_id": cell_decorator_user_id,
 "username": cell_decorator_username,
 "groups": cell_decorator_groups,
 "nodename": cell_decorator_nodename,
 "nodename_no_os": cell_decorator_nodename_no_os,
 "svc_action_err": cell_decorator_svc_action_err,
 "availstatus": cell_decorator_availstatus,
 "overallstatus": cell_decorator_overallstatus,
 "chk_type": cell_decorator_chk_type,
 "svcmon_links": cell_decorator_svcmon_links,
 "svc_ha": cell_decorator_svc_ha,
 "env": cell_decorator_env,
 "date_future": cell_decorator_date_future,
 "datetime_future": cell_decorator_datetime_future,
 "datetime_weekly": cell_decorator_datetime_weekly,
 "datetime_daily": cell_decorator_datetime_daily,
 "datetime_status": cell_decorator_datetime_status,
 "datetime_no_age": cell_decorator_datetime_no_age,
 "date_no_age": cell_decorator_date_no_age,
 "dash_severity": cell_decorator_dash_severity,
 "dash_links": cell_decorator_dash_links,
 "report_name": cell_decorator_report_name,
 "chart_name": cell_decorator_chart_name,
 "metric_name": cell_decorator_metric_name,
 "dns_records_type": cell_decorator_dns_records_type,
 "tag_exclude": cell_decorator_tag_exclude,
 "form_name": cell_decorator_form_name,
 "quota": cell_decorator_quota,
 "dns_record": cell_decorator_dns_record,
 "dns_domain": cell_decorator_dns_domain,
 "_network": cell_decorator_network,
 "boolean": cell_decorator_boolean,
 "status": cell_decorator_status,
 "users_domain": cell_decorator_users_domain,
 "users_role": cell_decorator_users_role,
 "alert_type": cell_decorator_alert_type,
 "appinfo_key": cell_decorator_appinfo_key,
 "appinfo_value": cell_decorator_appinfo_value,
 "log_icons": cell_decorator_log_icons,
 "app": cell_decorator_app,
 "obs_type": cell_decorator_obs_type,
 "obs_count": cell_decorator_obs_count,
 "uid": cell_decorator_uid,
 "gid": cell_decorator_gid,
 "pct": cell_decorator_pct,
 "tpl_command": cell_decorator_tpl_command,
 "prov_template": cell_decorator_prov_template,
 "fset_name": cell_decorator_fset_name,
 "disks_charts": cell_decorator_disks_charts,
 "comp_log": cell_decorator_comp_log,
 "comp_mod_log": cell_decorator_comp_mod_log,
 "comp_node_log": cell_decorator_comp_node_log,
 "comp_svc_log": cell_decorator_comp_svc_log,
 "modset_name": cell_decorator_modset_name,
 "log_level": cell_decorator_log_level,
 "log_event": cell_decorator_log_event,
 "ruleset_name": cell_decorator_ruleset_name,
 "rule_value": cell_decorator_rule_value
}


