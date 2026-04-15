const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createPool({
  host: "mysql-service",
  user: "root",
  password: "root",
  database: "testdb"
});

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on 5000");
});