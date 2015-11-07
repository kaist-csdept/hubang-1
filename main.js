var imgs = document.getElementsByTagName("img");

for (var i = 0; i < imgs.length; i ++) {
  var worker = new Worker(chrome.runtime.getURL("worker.js"));
  worker.onmessage = function(e) {
    if (e.data.result) {
      imgs[e.data.index].style.display = "none";
    }
  };
  worker.postMessage({url: imgs[i].src, index: i});
}
