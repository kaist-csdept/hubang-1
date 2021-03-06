﻿chrome.storage.local.get("power", function (s) {
  if (s.power) {
    $("#power").addClass("on");
	$("#plugin_ment").text("후방주의 플러그인이 현재 작동중입니다.");
  }
  else {
    $("#power").addClass("off");
	$("#plugin_ment").text("후방주의 플러그인이 현재 비활성화되어 있습니다.");
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
	$("#plugin_ment").text("후방주의 플러그인이 현재 비활성화되어 있습니다.");
    refresh();
  }
  else {
    $(this).addClass("on");
    $(this).removeClass("off");
    chrome.storage.local.set({"power": true});
	$("#plugin_ment").text("후방주의 플러그인이 현재 작동중입니다.");
    refresh();
  }
});