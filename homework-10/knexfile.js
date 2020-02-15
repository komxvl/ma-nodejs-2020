// Update with your config settings.
const config = require('./config/queries');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: config.database,
      user: config.user,
      password: config.password,
      host: config.host,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
