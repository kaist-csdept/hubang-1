var table = $("#sample_image_table");

var dir = ["1_non_nude", "2_semi_nude", "3_erotic", "4_real_nude"];

var k = 0;
for (var i = 0; i < 4; i ++) {
  var tr = document.createElement("tr");
  for (var j = 0; j < 4; j ++) {
    var td = document.createElement("td");
    var img = document.createElement("img");

    k ++ ;

    img.src = "dataset" + "/img" + ("0" + k).slice(-2) + ".jpg";
    $(img).addClass("sample_image");

    $(td).append(img);
    $(tr).append(("0" + k).slice(-2), td);
  }

  $(table).append(tr);
}
