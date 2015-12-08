var power = null;
var level = null;

chrome.storage.local.get(["power", "level"], function (s) {
  power = s.power;
  level = s.level;
  run(window);
});

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

var N = 4;
var workers = [];
for (var i = 0; i < N; i ++) {
  workers.push(new Worker(chrome.runtime.getURL("javascripts/worker.js")));
}

var imgs = [];

var total_image = 0;
var nude_image = 0;

function checkAndShow(img) {
  var image = new Image;
  $(img).hide();
  imgs.push(img);
  var i = imgs.length - 1;
  image.crossOrigin = "Anonymous";
  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    if (canvas.width == 0) {
      return;
    }
    ctx.drawImage(image, 0, 0);
    workers[i%N].postMessage([
        ctx.getImageData(0, 0, canvas.width, canvas.height).data,
        canvas.width,
        canvas.height,
        i, level]);
  };
  image.src = img.src;

  workers[i%N].onmessage = function(event) {
    total_image += 1;
    if (event.data[0]) {
      // console.log("hide : " + imgs[event.data[1]].src);
      nude_image += 1;
    } else {
      // console.log("not hide : " + imgs[event.data[1]].src);
      $(imgs[event.data[1]]).show();
    }
    console.log(total_image);
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

