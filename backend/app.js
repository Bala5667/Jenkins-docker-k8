const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",
  user: "root",
  password: process.env.DB_PASSWORD || "password",
  database: "studentdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3001, () => {
  console.log("Backend server running on port 3001");
});
