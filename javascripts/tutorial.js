var cur_idx = 0;

var img = $("#test_image")[0];

console.log(cur_idx);
console.log(img);

function refresh() {
  chrome.tabs.query({active: true}, function (tab) {
    chrome.tabs.reload(tab.id);
  });
}

var levels = [0, 2, 3, 5, 5, 1, 5, 4];
var n = levels.length;
var m = 6;
var avg_level = 0;

function load_next_image() {
  cur_idx += 1;
  if (cur_idx <= n) {
    img.src = "../images/test" + cur_idx + "_blur.jpg";
    $("#description").text(cur_idx.toString());
  }
  else {
    var new_level = Math.round(avg_level / m);
    console.log(new_level);
    chrome.storage.local.set({"level": new_level});
    refresh();
    location.href='popup.html';
  }
}

load_next_image();

var logs = ["매우 낮음", "낮음", "보통", "높음", "매우 높음"];
function save(idx, result) {
  $("#check").text(logs[Math.round(avg_level / (m*(cur_idx/n)))]);
}

$("#yes_btn").click(function () {
  avg_level += levels[cur_idx-1];
  save(cur_idx, true);
  load_next_image();
});

$("#no_btn").click(function () {
  save(cur_idx, false);
  load_next_image();
});
