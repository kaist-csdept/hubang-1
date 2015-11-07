onmessage = function(e) {
  postMessage({result: true, index: e.data.index});
};
