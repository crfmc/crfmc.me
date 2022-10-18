const mysql = require('mysql');
const dotenv = require('dotenv');

// Connecting .env variables
dotenv.config({ path: '../.env' });

const db = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME
});

module.exports = db;

