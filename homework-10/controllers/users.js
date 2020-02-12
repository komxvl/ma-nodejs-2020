const client = require('../config/queries');

const getUsers = (response) => {
  client.query('SELECT * FROM users', function(err, result) {
    if (err) {
      response.statusCode = 500;
      response.send({ error: 'Error...' });
    } else {
      response.statusCode = 200;
      response.write(JSON.stringify(result.rows));
      response.end();
    }
  });
}

 getUserById = (response, exampleId) => {
  const id = parseInt(exampleId);
  client.query('SELECT * FROM users WHERE id = $1', [id], function(err, result) {
    if (err) {
      response.statusCode = 500;
      response.send({ error: 'Error...' });
    } else {
      response.statusCode = 200;
      response.write(JSON.stringify(result.rows));
      response.end();
    }
  });
}

createUser = (response, request) => {
  let postData = '';

  request.on('data', function(chunk) {
    postData += chunk;
  });
  request.on('end', function() {
    const postDataEncode = JSON.parse(postData);
    client.query(
      'INSERT INTO users (id, login, password, token) VALUES ($1, $2, $3, $4)',
      [postDataEncode.id, postDataEncode.login, postDataEncode.password, postDataEncode.token],
      function(err, result) {
        console.log(result.rows);
        if (err) {
          response.statusCode = 500;
          response.send({ error: 'Error...' });
        } else {
          response.statusCode = 200;
          response.write(JSON.stringify({ status: 'ok', message: 'user created' }));
          response.end();
        }
      },
    );
  });
}

 const deleteUserById = (response, exampleId) => {
  const id = parseInt(exampleId);
  client.query('DELETE FROM users WHERE id = $1', [id], function(err, result) {
    if (err) {
      response.statusCode = 500;
      response.send({ error: 'Error...' });
    } else {
      response.statusCode = 200;
      response.write(JSON.stringify({ status: 'ok', message: 'user deleted' }));
      response.end();
    }
  });
}

 const updateUser = (response, request) => {
    var postData = '';
     request.on('data', function(chunk) {
    postData += chunk;
  });
  request.on('end', function() {
    const postDataEncode = JSON.parse(postData);   
     client.query(
       'UPDATE users SET login = $1, password = $2 WHERE id = $3',
       [postDataEncode.login, postDataEncode.password, postDataEncode.id],
       function(err, result) {
         if (err) {
           response.statusCode = 500;
           response.send({ error: 'Error...' });
         } else {
           response.statusCode = 200;
           response.write(JSON.stringify({ status: 'ok', message: 'updated' }));
           response.end();
         }
       },
     );
  });

}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUser
};
