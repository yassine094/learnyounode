function httpGetCallback(response) {
    var result = '';
  
    function appendResult(data) {
      result += data;
    }
  
    function logResult() {
      console.log(result.length);
      console.log(result);
    }
  
    response.setEncoding('utf8');
    response.on('data', appendResult);
    response.on('end', logResult);
  }