const express = require("express");
const mysql = require("mysql2");

const app = express();

// 🔥 CORS FIX (no npm needed)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// MySQL Connection
const db = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DB_NAME || "testdb",
});

// API
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on 5000");
});
