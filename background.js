var storage = chrome.storage.local;
var defaultSettings = {
  on: true
};

storage.set({"settings": defaultSettings});
