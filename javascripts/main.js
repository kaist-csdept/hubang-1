var power = null;

chrome.storage.local.get("power", function (s) {
  power = s.power;
  run(window);
});

function check(data, width, height) {
  // (r, g, b, ?) = (data[4i], data[4i+1], data[4i+2], data[4i+3])
  return true;
}

function checkAndHide(imgElement) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var image = new Image;
  image.crossOrigin = "Anonymous";
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    var imageData = ctx.getImageData(1, 0, canvas.width, canvas.height).data;
    if (check(imageData, canvas.width, canvas.height))
      $(imgElement).hide();
  };
  image.src = imgElement.src;
}

function run(win) {
  if (!win) return;
  var doc = win.document;
  if (!power) return;

  $("img").each(function () {
    checkAndHide(this);
  });

  $("iframe").ready(function () {
    $(this).contents().find("img").each(function () {
      checkAndHide(this);
    });
  });

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var newNodes = m.addedNodes;
      if (newNodes !== null) {
        $(newNodes).find("img").each(function () {
          checkAndHide(this);
        });
      }
    });
  });
  observer.observe(document, { subtree: true, childList: true, attributes: true });
}

