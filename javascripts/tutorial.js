var cur_idx = 1;

var img = $("#test_image")[0];

console.log(cur_idx);
console.log(img);

function load_next_image() {
  cur_idx += 1;
  img.src = "../images/test" + cur_idx + ".png";
  $("#description").text(cur_idx.toString());
}

function save(idx, result) {
}

$("#yes_btn").click(function () {
  save(cur_idx, true);
  load_next_image();
});

$("#no_btn").click(function () {
  save(cur_idx, false);
  load_next_image();
});
