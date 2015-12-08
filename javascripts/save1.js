$('#save').click(function(){
  chrome.storage.local.get("tlevel",function(t){
	chrome.storage.local.set({"level": t.tlevel});
    location.href='popup.html';
  });
});

$('#cancel').click(function(){
  location.href='popup.html';
});