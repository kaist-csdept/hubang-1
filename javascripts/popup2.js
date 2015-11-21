chrome.storage.local.get("tlevel", function (u) {
  chrome.storage.local.set({"level": u.tlevel});
  chrome.storage.local.set({"preset?": false});
  location.href='popup.html';
});