chrome.storage.local.get("power", function (s) {
  if (s.power) {
    $("#power").addClass("on");
  }
  else {
    $("#power").addClass("off");
  }
});

function refresh() {
  chrome.tabs.query({active: true}, function (tab) {
    chrome.tabs.reload(tab.id);
  });
}

$("#power").click(function () {
  if ($(this).hasClass("on")) {
    $(this).addClass("off");
    $(this).removeClass("on");
    chrome.storage.local.set({"power": false});
    refresh();
  }
  else {
    $(this).addClass("on");
    $(this).removeClass("off");
    chrome.storage.local.set({"power": true});
    refresh();
  }
});
