chrome.storage.local.get("level", function (t) {
  if (t.level==1){
	$("#textlog").text("현재 설정은 낮음입니다.");
	$('#log').text("현재 레벨 : 낮음");
	document.getElementById("test").value=1;
	chrome.storage.local.set({"tlevel": 1});
  }
  else if (t.level==2){
	$("#textlog").text("현재 설정은 보통입니다.");
	$('#log').text("현재 레벨 : 보통");
	document.getElementById("test").value=2;
	chrome.storage.local.set({"tlevel": 2});
  }
  else if (t.level==3){
	$("#textlog").text("현재 설정은 높음입니다.");
	$('#log').text("현재 레벨 : 높음");
	document.getElementById("test").value=3;
	chrome.storage.local.set({"tlevel": 3});
  }
  else if (t.level==4){
	$("#textlog").text("현재 설정은 매우 높음입니다.");
	$('#log').text("현재 레벨 : 매우 높음");
	document.getElementById("test").value=4;
	chrome.storage.local.set({"tlevel": 4});
  }
  else{
	$("#textlog").text("현재 설정은 매우 낮음입니다.");
	$('#log').text("현재 레벨 : 매우 낮음");
	document.getElementById("test").value=0;
	chrome.storage.local.set({"tlevel": 0});
  }
});

$(function() {
  $('#test').on('change',function() {
    num=document.getElementById("test").value;
    if(num==1){
	  $('#log').text("현재 레벨 : 낮음");
      chrome.storage.local.set({"tlevel": 1});
	}
	else if(num==2){
	  $('#log').text("현재 레벨 : 보통");
      chrome.storage.local.set({"tlevel": 2});
	}
	else if(num==3){
	  $('#log').text("현재 레벨 : 높음");
      chrome.storage.local.set({"tlevel": 3});
	}
	else if(num==4){
	  $('#log').text("현재 레벨 : 매우 높음");
      chrome.storage.local.set({"tlevel": 4});
	}
	else{
	  $('#log').text("현재 레벨 : 매우 낮음");
      chrome.storage.local.set({"tlevel": 0});
	}
  });
});
