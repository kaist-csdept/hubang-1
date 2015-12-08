var cur_idx = 1;
var yes_counter = 0;

var img = $("#test_image")[0];

console.log(cur_idx);
console.log(img);

function refresh() {
  chrome.tabs.query({active: true}, function (tab) {
    chrome.tabs.reload(tab.id);
  });
}

function load_next_image() {
  cur_idx += 1;
  if (cur_idx <= 10) {
    img.src = "../images/test" + cur_idx + ".png";
    $("#description").text(cur_idx.toString());
  }
  else {
    var new_level = Math.floor(yes_counter / 2.5);
    console.log(new_level);
    chrome.storage.local.set({"level": new_level});
    refresh();
    location.href='popup.html';
  }
}

function save(idx, result) {
  if (result)
    yes_counter += 1;

  $("#check").text(yes_counter.toString());
}

$("#yes_btn").click(function () {
  save(cur_idx, true);
  load_next_image();
});

$("#no_btn").click(function () {
  save(cur_idx, false);
  load_next_image();
});
