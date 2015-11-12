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
