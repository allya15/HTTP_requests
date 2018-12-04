var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {

  https.get(requestOptions, function(response) {

    if (response.statusCode !== 200) {
      console.log("Error loading page: ", response.statuscode);
    }

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('Chunk Received. Content: \n' + data + "\n");
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTMLChunks();