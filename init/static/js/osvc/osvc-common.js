// OpenSvc Common JS function
// MD 08062015

function is_enter(e) {
  var characterCode = -1;
  if (e && e.which) {
    e = e
    characterCode = e.which
  } else if (e && e.keyCode) {
    characterCode = e.keyCode
  }
  if (characterCode == 13) {
    return true
  }
  return false
}

function is_blank(str) {
    return (!str || /^\s*$/.test(str));
}

function toggle(divid, head)
{
  if (head) {
    e = $("#"+head).find("#"+divid);
  } else {
    e = $('#'+divid);
  }
  e.slideToggle();
}

function mul_toggle(divid,divid2, head)
{
  if (head) {
    e1 = $("#"+head).find("#"+divid);
    e2 = $("#"+head).find("#"+divid2);
  } else {
    e1 = $('#'+divid);
    e2 = $('#'+divid2);
  }
  e1.slideToggle(200, function() {
    e2.slideToggle(200);
  });
}

function float2int (value) {
    return value | 0;
}

function spinner_del(e, text)
{
    e.children(".spinner").remove()
}

function spinner_add(e, text)
{
    if (e.children(".spinner").length > 0) {
        return
    }
    if (!text) {
        text = ""
    }
    s = $("<span class='spinner'><span>")
    s.text(text)
    e.append(s)
    if (!e.is(":visible")) {
        e.slideToggle()
    }
}

