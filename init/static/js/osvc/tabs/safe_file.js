function safe_file_tabs(divid, options) {
	var o = tabs(divid)
	o.options = options
	o.options.bgcolor = osvc.colors.comp
	o.options.icon = "safe16"
	o.link = {
		"fn": arguments.callee.name,
		"title": "link."+arguments.callee.name
	}

	o.load(function() {
		var title = o.options.uuid
		o.closetab.text(title)

		// tab properties
		i = o.register_tab({
			"title": "safe_file_tabs.properties",
			"title_class": "icon safe16"
		})
		o.tabs[i].callback = function(divid) {
			safe_file_properties(divid, o.options)
		}

		// tab content
		i = o.register_tab({
			"title": "safe_file_tabs.content",
			"title_class": "icon log16"
		})
		o.tabs[i].callback = function(divid) {
			safe_file_content(divid, o.options)
		}

		o.set_tab(o.options.tab)
	})
	return o
}

function safe_file_content(divid, options) {
	var o = {}

	// store parameters
	o.divid = divid
	o.div = $("#"+divid)
	o.options = options
	o.link = {
		"fn": arguments.callee.name,
		"parameters": o.options,
		"title": "link."+arguments.callee.name
	}
	o.init = function() {
		o.div.css({"padding": "1em", "box-sizing": "border-box"})
		spinner_add(o.div)
		services_osvcgetrest("/safe/%1/preview", [o.options.uuid], "", function(jd) {
			spinner_del(o.div)
			if (jd.error) {
				o.div.text(jd.error)
			} else {
				o.div.addClass("pre")
				o.div.text(jd.data)
			}
			osvc_tools(o.div, {
				"link": o.link
			})
		})
	}

	o.init()

	return o
}

function safe_file_properties(divid, options) {
	var o = {}

	// store parameters
	o.divid = divid
	o.div = $("#"+divid)
	o.options = options
	o.link = {
		"fn": arguments.callee.name,
		"parameters": o.options,
		"title": "link."+arguments.callee.name
	}

	o.init = function() {
		osvc_tools(o.div, {
			"link": o.link
		})
		o.info_name = o.div.find("#name")
		o.info_uuid = o.div.find("#uuid")
		o.info_md5 = o.div.find("#md5")
		o.info_size = o.div.find("#size")
		o.info_uploader = o.div.find("#uploader")
		o.info_uploaded_from = o.div.find("#uploaded_from")
		o.info_uploaded_date = o.div.find("#uploaded_date")
		o.info_publications = o.div.find("#publications")
		o.info_responsibles = o.div.find("#responsibles")
		o.info_publications_title = o.div.find("#publications_title")
		o.info_responsibles_title = o.div.find("#responsibles_title")
		o.info_usage = o.div.find("#usage")
		o.load_form()
	}

	o.load_form = function() {
		services_osvcgetrest("/safe/%1", [o.options.uuid], "", function(jd) {
			o._load_form(jd.data[0])
		})
	}

	o._load_form = function(data) {
		o.info_name.html(data.name)
		o.info_uuid.html(data.uuid)
		o.info_uuid.attr("title", data.uuid).tooltipster()
		o.info_md5.html(data.md5)
		o.info_size.html(fancy_size_b(data.size))
		o.info_uploader.html(data.uploader)
		o.info_uploaded_from.html(data.uploaded_from)
		o.info_uploaded_date.html(osvc_date_from_collector(data.uploaded_date))

		tab_properties_generic_updater({
			"div": o.div,
			"privileges": ["SafeUploader", "Manager"],
			"post": function(data, callback, error_callback) {
				services_osvcpostrest("/safe/%1", [o.options.uuid], "", data, callback, error_callback)
			}
		})
		safe_file_publications({
			"tid": o.info_publications,
			"uuid": data.uuid
		})
		safe_file_responsibles({
			"tid": o.info_responsibles,
			"uuid": data.uuid
		})
		services_osvcgetrest("/safe/%1/usage", [o.options.uuid], "", function(jd) {
			tab_properties_generic_list({
				"data": jd.data.services,
				"key": "svcname",
				"item_class": "icon svc",
				"id": "svc_id",
				"flash_id_prefix": "svc",
				"bgcolor": osvc.colors.svc,
				"e_title": $(""),
				"e_list": o.info_usage,
				"lowercase": true,
				"ondblclick": function(divid, data) {
					service_tabs(divid, {"svc_id": data.id, "svcname": data.name})
				}
			})
			tab_properties_generic_list({
				"data": jd.data.variables,
				"key": "var_name",
				"item_class": "icon comp16",
				"id": "id",
				"flash_id_prefix": "var",
				"bgcolor": osvc.colors.comp,
				"e_title": $(""),
				"e_list": o.info_usage,
				"lowercase": true,
				"extra_attr": ["ruleset_id"],
				"ondblclick": function(divid, data) {
					variable_tabs(divid, {"variable_id": data.id, "variable_name": data.name, "ruleset_id": data.ruleset_id})
				}
			})
		})

		var am_data = [
			{
				"title": "action_menu.data_actions",
				"children": [
					{
						"selector": ["tab"],
						"foldable": false,
						"cols": [],
						"children": [
							{
								"title": "action_menu.del",
								"class": "del16",
								"fn": "data_action_delete_safe_file",
								"privileges": ["Manager", "SafeUploader"]
							}
						]
					}
				]
			}
		]
		tab_tools({
			"div": o.div.find("#tools"),
			"data": {"id": data.id},
			"am_data": am_data
		})


	}

	o.div.load("/init/static/views/safe_file_properties.html?v="+osvc.code_rev, function() {
		o.div.i18n()
		o.init()
	})

	return o
}


