//
// group
//
function group_tabs(divid, options) {
  o = tabs(divid)
  o.options = options

  o.load(function(){
    var i = 0

    if (!("group_id" in o.options) && ("group_name" in o.options)) {
      services_osvcgetrest("R_GROUPS", "", {"filters": ["role "+o.options.group_name]}, function(jd) {
        var group = jd.data[0]
        o.options.group_id = group.id
        o._load()
      })
    } else {
      o._load()
    }
  })

  o._load = function() {
    o.closetab.children("p").text(o.options.group_name ? o.options.group_name : o.options.group_id)

    // tab properties
    i = o.register_tab({
      "title": "node_tabs.properties",
      "title_class": "guys16"
    })
    o.tabs[i].callback = function(divid) {
      group_properties(divid, o.options)
    }

    // tab hidden menu entries
    i = o.register_tab({
      "title": "group_tabs.hidden_menu_entries",
      "title_class": "menu16"
    })
    o.tabs[i].callback = function(divid) {
      group_hidden_menu_entries(divid, o.options)
    }

    o.set_tab(o.options.tab)
  }
  return o
}

function group_properties(divid, options) {
	var o = {}

	// store parameters
	o.divid = divid
	o.div = $("#"+divid);
	o.options = options

	o.init = function() {
		o.info_id = o.div.find("#id");
		o.info_description = o.div.find("#description");
		o.info_privilege = o.div.find("#privilege");
		o.info_users_title = o.div.find("#users_title");
		o.info_users = o.div.find("#users");
		o.info_nodes_title = o.div.find("#nodes_title");
		o.info_nodes = o.div.find("#nodes");
		o.info_apps_title = o.div.find("#apps_title");
		o.info_apps = o.div.find("#apps");
		o.info_services_title = o.div.find("#services_title");
		o.info_services = o.div.find("#services");

		o.load_group()
	}

	o.load_group = function() {
		services_osvcgetrest("R_GROUP", [o.options.group_id], "", function(jd) {
			if (!jd.data || (jd.data.length == 0)) {
				return
			}
			var data = jd.data[0]
			o.info_description.html(data.description);
			o.info_id.html(data.id);

			tab_properties_boolean({
				"div": o.info_privilege,
				"privileges": ["Manager", "UsersManager"],
				"post": function(_data, callback, error_callback) {
					services_osvcpostrest("R_GROUP", [data.id], "", _data, callback, error_callback)
				}
			})
			tab_properties_generic_updater({
				"div": o.div,
				"post": function(_data, callback, error_callback) {
					services_osvcpostrest("R_GROUP", [data.id], "", _data, callback, error_callback)
				}
			})
			tab_properties_generic_list({
				"request_service": "R_NODES",
				"request_data": {
					"filters": ["team_responsible "+data.role]
				},
				"limit": 50,
				"key": "nodename",
				"item_class": "node16",
				"e_title": o.info_nodes_title,
				"e_list": o.info_nodes
			})
			tab_properties_generic_list({
				"request_service": "R_GROUP_SERVICES",
				"request_parameters": [data.id],
				"limit": 50,
				"key": "svc_name",
				"item_class": "svc",
				"e_title": o.info_services_title,
				"e_list": o.info_services
			})
			tab_properties_generic_list({
				"request_service": "R_GROUP_USERS",
				"request_parameters": [data.id],
				"request_data": {
					"props": "first_name,last_name"
				},
				"limit": 50,
				"key": function(data) {
					return data.first_name + " " + data.last_name
				},
				"item_class": "guy16",
				"e_title": o.info_users_title,
				"e_list": o.info_users
			})
			tab_properties_generic_list({
				"request_service": "R_GROUP_APPS",
				"request_parameters": [data.id],
				"limit": 50,
				"key": "app",
				"item_class": "svc",
				"e_title": o.info_apps_title,
				"e_list": o.info_apps
			})
		})

	}

	o.div.load("/init/static/views/group_properties.html", function() {
		o.div.i18n()
		o.init()
	})

	return o

}


function group_hidden_menu_entries(divid, options) {
	o = {}
	o.options = options
	o.div = $("#"+divid)

	o.set = function(id) {
		var data = {
			"menu_entry": id
		}
		services_osvcpostrest("R_GROUP_HIDDEN_MENU_ENTRIES", [o.options.group_id], "", data, function(jd) {
			if (jd.error && (jd.error.length > 0)) {
				$(".flash").show("blind").html(services_error_fmt(jd))
			}
			
		})
	}

	o.del = function(id) {
		var data = {
			"menu_entry": id
		}
		services_osvcdeleterest("R_GROUP_HIDDEN_MENU_ENTRIES", [o.options.group_id], "", data, function(jd) {
			if (jd.error && (jd.error.length > 0)) {
				$(".flash").show("blind").html(services_error_fmt(jd))
			}
		})
	}

	o.get = function(callback) {
		var params = {
			"meta": "0",
			"limit": "0"
		}
		services_osvcgetrest("R_GROUP_HIDDEN_MENU_ENTRIES", [o.options.group_id], params, function(jd) {
			if (jd.error && (jd.error.length > 0)) {
				$(".flash").show("blind").html(services_error_fmt(jd))
			}
			o.hidden = []
			for (i=0; i<jd.data.length; i++) {
				o.hidden.push(jd.data[i].menu_entry)
			}
			callback()
		})
	}

	o.format_entry = function(section, entry) {
		var div = $("<div></div>")
		o.area.append(div)

		// entry
		var e = $(menu_create_entry_s(section, entry))

		// checkbox
		var input = $("<input class='ocb' type='checkbox' />")
		input.attr("id", entry.id)
		if (o.hidden.indexOf(entry.id) >= 0) {
			input.prop("checked", true)
			e.find(".menu_icon,.menu_title").css({"color": "darkred"})
		}
		var label = $("<label class='ocb'></label>")
		label.attr("for", entry.id)

		e.find(".menu_box").prepend([input, label])
		div.append(e)

		// click
		input.bind("click", function() {
			var id = $(this).attr("id")
			var val = $(this).is(":checked")
			if (val == true) {
				o.set(id)
				$(this).parent().find(".menu_icon,.menu_title").css({"color": "darkred"})
			} else {
				o.del(id)
				$(this).parent().find(".menu_icon,.menu_title").css({"color": "black"})
			}
		})
	}

	o.format_section = function(section) {
		var title = $("<h2></h2>")
		title.text(i18n.t("menu."+section+".title"))
		o.area.append(title)
		for (entry in menu_data[section]) {
			o.format_entry(section, menu_data[section][entry])
		}
	}

	o.init = function() {
		var area = $("<div class='group_hidden_menu'></div>")
		o.area = area
		for (section in menu_data) {
			o.format_section(section)
		}
		o.div.empty()
		o.div.append(area)
	}

	o.get(function() {
		o.init()
	})
	return o
}