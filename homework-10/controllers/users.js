const client = require('../config/queries');

function getUsers(response) {
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

function getCurrentUser(response, request) {
  console.log(request.params);
  const id = parseInt(request.params.id);
  client.query('SELECT * FROM users WHERE id = $1', [id], function(err, result) {
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

module.exports = {
  getUsers,
  getCurrentUser,
};
