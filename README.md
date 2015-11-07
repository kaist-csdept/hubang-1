# hubang

## curent status

- 현재 Web Worker API를 이용하여 구현해놓음
  - worker.js와 main.js에서 message가 오고감(onmessage : 받기, postMessage : 보내기)
  - img 하나당 worker 하나(thread 하나)
  - worker.js를 algorithm 파트가 구현해야함
- 현재는 단순히 worker.js에서 항상 true를 return해주고, 그 정보를 받아서 main.js에서 가려줌.
- 가리는 방법은 style에 "display: none"을 추가하는 형태로 구현

## issues

- webpage가 로드되면서 concurrent하게 main.js가 실행되서, img가 바로 가려지지 않고, 보여진 다음 가려짐
