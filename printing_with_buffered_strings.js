var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML(callback) {

  https.get(requestOptions, function (response) {
    if (response.statusCode !== 200) {
      console.log("Error loading page: ", response.statuscode);
    }
    response.setEncoding('utf8');
    var dataStream = [];
    response.on('data', function (data) {
      dataStream.push(data);
      // console.log('Chunk Received. Content: \n' + data + "\n");
    });
    response.on('end', function () {
      console.log(dataStream + "\n");
    });
  });
}
getAndPrintHTML();