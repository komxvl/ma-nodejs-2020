const http = require('http');
var url = require('url');
const querystring = require('querystring');

const config = require('../config/serverConfig');
// const { endResponse } = require('./heplers/helpers');
const client = require('../config/queries');
const users = require('../controllers/users');

function handleRequest(request, response) {
  response.on('error', (err) => {
    console.error('Response error:', err.stack);
    // endResponse(response, 500);
  });
  var url_parts = url.parse(request.url, true);
  var str = request.url;
    var exampleId = str.split("/")[2];
    console.log(exampleId)
    console.log(url_parts)
  if (request.url === '/') {
    response.statusCode = 200;
        response.write(JSON.stringify('Hello world'));
        response.end();
  }
  else if (request.url === '/users') {
    users.getUsers(response);
  }
  else if (exampleId) {
    users.getCurrentUser(response, exampleId);
  }
  // endResponse(response, 404);
}

function start() {
  const server = http.createServer(handleRequest);

  server.on('error', (err) => {
    console.error('Server error:', err.stack);
    server.close();
    setTimeout(() => start(), 500); // restart server in 0.5 sec
  });

  server.listen(config.port, () => {
    const addressInfo = server.address();
    console.log(`Server is listening on: [${addressInfo.address}]:${addressInfo.port}`);
  });
}

module.exports = {
  start,
};
