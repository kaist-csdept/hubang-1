var power = null;

chrome.storage.local.get("power", function (s) {
  power = s.power;
  run(window);
});

function run(win) {
  if (!win) return;
  var doc = win.document;
  if (!power) return;

  $("img").each(function () {
    $(this).hide();
  });

  $("iframe").ready(function () {
    console.log(this);
    console.log($(this).contents().find("img"))
    $(this).contents().find("img").each(function () {
      $(this).hide();
    });
  });

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var newNodes = m.addedNodes;
      if (newNodes !== null) {
        $(newNodes).find("img").each(function () {
          $(this).hide();
        });
      }
    });
  });
  observer.observe(document, { subtree: true, childList: true, attributes: true });
}

