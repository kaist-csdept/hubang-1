chrome.storage.local.get("tlevel", function (u) {
  chrome.storage.local.set({"level": u.tlevel});
  chrome.storage.local.set({"preset?": true});
  location.href='popup.html';
});