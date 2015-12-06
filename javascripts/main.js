var power = null;

chrome.storage.local.get("power", function (s) {
  power = s.power;
  run(window);
});

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

var N = 16;
var workers = [];
for (var i = 0; i < N; i ++) {
  workers.push(new Worker(chrome.runtime.getURL("javascripts/worker.js")));
}

var imgs = [];

function checkAndShow(img) {
  var image = new Image;
  $(img).hide();
  imgs.push(img);
  var i = imgs.length - 1;
  image.crossOrigin = "Anonymous";
  image.onload = function() {
    canvas.width = Math.min(image.width, 100);
    canvas.height = Math.min(image.height, 100);
    if (canvas.width == 0) {
      worker.terminate();
      return;
    }
    ctx.drawImage(image, 0, 0);
    workers[i%N].postMessage([
        ctx.getImageData(0, 0, canvas.width, canvas.height).data,
        canvas.width,
        canvas.height,
        i]);
  };
  image.src = img.src;

  workers[i%N].onmessage = function(event) {
    if (event.data[0]) {
      console.log("hide : " + imgs[event.data[1]].src);
    } else {
      console.log("not hide : " + imgs[event.data[1]].src);
      $(imgs[event.data[1]]).show();
    }
  };
}

function run(win) {
  if (!win) return;
  var doc = win.document;
  if (!power) return;

  $("img").each(function () {
    $(this).hide();
  });

  $("img").each(function () {
    checkAndShow(this);
  });

  /*
  $("iframe").ready(function () {
    $(this).contents().find("img").each(function () {
      console.log("call");
      checkAndHide(this);
    });
  });
  */

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var newNodes = m.addedNodes;
      if (newNodes !== null) {
        $(newNodes).find("img").each(function () {
          $(this).hide();
        });
        $(newNodes).find("img").each(function () {
          checkAndShow(this);
        });
      }
    });
  });
  observer.observe(document, { subtree: true, childList: true, attributes: true });
}

