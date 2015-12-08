var logs = ["매우 낮음", "낮음", "보통", "높음", "매우 높음"];
var control = document.getElementById("control");

function refresh() {
  chrome.tabs.query({active: true}, function (tab) {
    chrome.tabs.reload(tab.id);
  });
}

chrome.storage.local.get("level", function (t) {
  control.value = t.level;
  $(".log").text(logs[t.level]);
});

$('#control').on('change',function() {
  $(".log").text(logs[control.value]);
});

$('#save').click(function(){
  chrome.storage.local.set({"level": control.value});
  chrome.storage.local.set({"preset": true});
  refresh();
  location.href='popup.html';
});

$('#cancel').click(function(){
  location.href='popup.html';
});
