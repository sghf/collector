function alert_info(divid, options) {
	var o = {}

	// store parameters
	o.divid = divid
	o.div = $("#"+divid)
	o.options = options

	o.wiki_page_name = function() {
		var s = "alert"
		if (o.options.node_id) {
 		       s += "_" + o.options.node_id
		} else if (o.options.node_id) {
 		       s += "_" + o.options.svc_id
		}
		if (o.options.dash_md5) {
 		       s += "_" + o.options.dash_md5
		}
		return s
	}

	o.div.load('/init/static/views/alert_info.html?v='+osvc.code_rev, function() {
		o.div.i18n()
		o.e_timeline = o.div.find("[name=timeline]")
		o.e_wiki = o.div.find("[name=wiki]")
		o.e_timeline.uniqueId()
		o.e_wiki.uniqueId()

		alert_event(o.e_timeline.attr("id"), o.options)
		wiki(o.e_wiki.attr("id"), {
			"nodes": o.wiki_page_name()
		})
	})
	return o
}

function alert_event(divid, options) {
	var o = {}

	o.loaded = $.Deferred()
	o.data = []

	o.timeline_options = {
		//zoomKey: "metaKey",
		stack: false,
		zoomable: true,
		clickToUse: false
	}

	// store parameters
	o.divid = divid
	o.div = $("#"+divid)
	o.options = options

	o.load = function() {
		spinner_add(o.div)
		var _params = {
			"filters": ["dash_md5 "+o.options.dash_md5],
		}
		if (o.options.node_id && o.options.node_id != "") {
			_params.filters.push("node_id "+o.options.node_id)
		} else {
			_params.filters.push("node_id empty")
		}
		if (o.options.svc_id && o.options.svc_id != "") {
			_params.filters.push("svc_id "+o.options.svc_id)
		} else {
			_params.filters.push("svc_id empty")
		}
		services_osvcgetrest("R_ALERT_EVENT", "", _params, function(jd) {
			spinner_del(o.div)
			if (jd.data === undefined) {
				return
			}
			o.parse_data(jd.data)
		})
	}
	o.parse_data = function(data) {
		var _data = []
		for (var i=0; i<data.length; i++) {
			var d = data[i]
			var _start = moment.tz(d.dash_begin, osvc.server_timezone)
			if (!d.dash_end) {
				var _end = moment()
			} else {
				var _end = moment.tz(d.dash_end, osvc.server_timezone)
			}
			var d = (_start - _end) / 60000
			_data.push({
				"start": _start,
				"end": _end,
				"title": delta_properties(d).text,
				"content": "&nbsp;",
				"className": "box-red"
			})
		}
		o.data = _data
		o.loaded.resolve(true)
	}

	o.init_timeline = function() {
		require(["vis"], function(vis) {
			o.timeline = new vis.Timeline(o.div[0], o.data, o.timeline_options)
			o.timeline.on("change", function() {
				o.div.find("[title]").tooltipster()
			})
		})
	}

	o.init = function() {
		o.div.empty()
		o.load(o.options)
		$.when(
			o.loaded
		).then(function(){
			o.init_timeline()
		})
	}

	o.init()

	return o
}

