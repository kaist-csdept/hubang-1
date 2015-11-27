var power = null;

chrome.storage.local.get("power", function (s) {
  power = s.power;
  run(window);
});

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

function checkAndShow(img) {
  var worker = new Worker(chrome.runtime.getURL("javascripts/worker.js"));
  var image = new Image;
  $(img).hide();
  image.crossOrigin = "Anonymous";
  image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    if (canvas.width == 0) {
      worker.terminate();
      return;
    }
    ctx.drawImage(image, 0, 0);
    worker.postMessage([
        ctx.getImageData(0, 0, canvas.width, canvas.height).data,
        canvas.width,
        canvas.height]);
  };
  image.src = img.src;

  worker.onmessage = function(event) {
    if (event.data) {
      console.log("hide");
    } else {
      console.log("not hide");
      $(img).show();
    }
    worker.terminate();
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

