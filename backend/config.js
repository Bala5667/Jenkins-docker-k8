const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DB || 'student_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
