$("#power").click(function () {
  if ($(this).hasClass("on")) {
    $(this).addClass("off");
    $(this).removeClass("on");
  }
  else {
    $(this).addClass("on");
    $(this).removeClass("off");
  }
});
