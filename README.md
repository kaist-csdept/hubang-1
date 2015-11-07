# hubang

## usage

0. git clone
1. chrome 브라우저에서, 주소창에 chrome://extensions 로 들어가서 확장프로그램 관리 페이지로 들어감
2. 오른쪽 상단 개발자 모드를 체크함
3. 압축해제된 확장프로그램 로드를 누르고, clone한 폴더를 로드

## curent status

- 현재 Web Worker API를 이용하여 구현해놓음
  - worker.js와 main.js에서 message가 오고감(onmessage : 받기, postMessage : 보내기)
  - img 하나당 worker 하나(thread 하나)
  - worker.js를 algorithm 파트가 구현해야함
- 현재는 단순히 worker.js에서 항상 true를 return해주고, 그 정보를 받아서 main.js에서 가려줌.
- 가리는 방법은 style에 "display: none"을 추가하는 형태로 구현

## issues

- webpage가 로드되면서 concurrent하게 main.js가 실행되서, img가 바로 가려지지 않고, 보여진 다음 가려짐
- <frame></frame> 에 있는 image들은 getElementsByTag() 함수로 찾을 수가 없음. 즉 가려지지 않음.
