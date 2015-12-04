table = $("#sample_image_table");

for (var i = 0; i < 4; i ++) {
  var tr = document.createElement("tr");
  for (var j = 0; j < 6; j ++) {
    var td = document.createElement("td");
    var img = document.createElement("img");

    img.src = "images/sample.jpg";
    $(img).addClass("sample_image");

    $(td).append(img);
    $(tr).append(td);
  }
  $(table).append(tr);
}
