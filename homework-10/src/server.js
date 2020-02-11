const http = require('http');
const config = require('../config/serverConfig');
// const { endResponse } = require('./heplers/helpers');
const client = require('../config/queries');
const users = require('../controllers/users');

function handleRequest(request, response) {
  response.on('error', (err) => {
    console.error('Response error:', err.stack);
    // endResponse(response, 500);
  });
  if (request.url === '/') {
    client.query('SELECT * FROM users', function(err, result) {
      console.log(result.rows);
      if (err) {
        console.log(err);
        response.statusCode = 500;
        response.send({ error: 'Error...' });
      } else {
        response.statusCode = 200;
        response.write(JSON.stringify(result.rows));
        response.end();
      }
    });
  }
  if (request.url === '/users') {
    users.getUsers(response);
  }
  if (request.url === '/users/:id') {
    users.getCurrentUser(response, request);
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
