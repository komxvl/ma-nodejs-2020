const { Client } = require('pg');

const connectionString = 'postgressql://postgres:time2bass2@localhost:5432/postgres';
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'time2bass2',
  port: 5433,
  connectionString,
});

client.connect();

module.exports = client;
