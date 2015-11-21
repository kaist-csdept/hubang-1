# hubang

## usage

0. git clone
1. chrome 브라우저에서, 주소창에 chrome://extensions 로 들어가서 확장프로그램 관리 페이지로 들어감
2. 오른쪽 상단 개발자 모드를 체크함
3. 압축해제된 확장프로그램 로드를 누르고, clone한 폴더를 로드

## issues

- webpage가 로드되면서 concurrent하게 main.js가 실행되서, img가 바로 가려지지 않고, 보여진 다음 가려짐
- background image로 설정되어있는 경우에는 처리가 안됨

## Log

### 11/12 by Hankook

- 일단 테스트를 위해 Web Worker 사용되는 부분을 삭제
- 같은 domain의 iframe의 경우, image 지우기 성공
- jquery를 이용


### 11/07 by Hankook

- 현재 Web Worker API를 이용하여 구현해놓음(
  - worker.js와 main.js에서 message가 오고감(onmessage : 받기, postMessage : 보내기)
  - img 하나당 worker 하나(thread 하나)
  - worker.js를 algorithm 파트가 구현해야함
- 현재는 단순히 worker.js에서 항상 true를 return해주고, 그 정보를 받아서 main.js에서 가려줌.
- 가리는 방법은 style에 "display: none"을 추가하는 형태로 구현

### 11/15 by Minsu

- 현재 부라우저의 팝업 단추를 누르면 뜨는 메인 페이지 작성중
- 구글 데이터 세이버에서는 http://chartjs.org/에 있는 자바스크립트 파일을 이용하여 그래프를 작성하였음
- 어플리케이션 enable disable부분은 좀 더 조사가 필요해 보여 일단 enabled 된 상황의 아이콘과 알림글 출력
- 아이콘들은 모두 급하게 만든 임시 파일이며 후에 수정이 필요
- thimble.mozilla.org 위 링크를 통해 일차적으로 작성중

### 11/16 by Minsu

- div의 display속성 중 none과 block 그리고 이것을 수정해주는 javascript 파일을 이용하면 어플리케이션
  enable, disable 단추를 만들 수 있을거라 추측됨
  
### 11/22 by Minsu
  몇 가지 chrome.storage 속성들
  power (boolean) : 어플리케이션이 켜져있는지 꺼져있는지 결정
  level (integer(0~4)) : 프리셋 레벨
  tlevel (integer(0~4)) : 프리셋 임시 레벨
  preset? (boolean) : 프리셋을 이용하는 경우 확인
  <a> 타입에서 onclick이 제대로 실행되지 않기에 빈 html파일을 생성한 다음 함수를 실행한 다음에 location.href='popup.html'를 이용하여 목적 html로 이동