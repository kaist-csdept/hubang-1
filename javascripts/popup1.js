chrome.storage.local.get("level", function (t) {
  if (t.level==1){
	$("#textlog").text("현재 설정은 낮음입니다.");
	$('#log').text("현재 레벨 : 낮음");
	document.getElementById("test").value=1;
  }
  else if (t.level==2){
	$("#textlog").text("현재 설정은 낮음입니다.");
	$('#log').text("현재 레벨 : 보통");
	document.getElementById("test").value=2;
  }
  else if (t.level==3){
	$("#textlog").text("현재 설정은 높음입니다.");
	$('#log').text("현재 레벨 : 높음");
	document.getElementById("test").value=3;
  }
  else if (t.level==4){
	$("#textlog").text("현재 설정은 매우 높음입니다.");
	$('#log').text("현재 레벨 : 매우 높음");
	document.getElementById("test").value=4;
  }
  else{
	$("#textlog").text("현재 설정은 매우 낮음입니다.");
	$('#log').text("현재 레벨 : 매우 낮음");
	document.getElementById("test").value=0;
  }
});

$(function() {
  $('#test').on('change',function() {
    num=document.getElementById("test").value;
    if(num==1){
	  $('#log').text("현재 레벨 : 낮음");
	}
	else if(num==2){
	  $('#log').text("현재 레벨 : 보통");
	}
	else if(num==3){
	  $('#log').text("현재 레벨 : 높음");
	}
	else if(num==4){
	  $('#log').text("현재 레벨 : 매우 높음");
	}
	else{
	  $('#log').text("현재 레벨 : 매우 낮음");
	}
  });
});
