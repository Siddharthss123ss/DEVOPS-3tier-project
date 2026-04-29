const express = require("express");
const mysql = require("mysql2");

const app = express();

// MySQL Connection Pool
const db = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DB_NAME || "testdb",   // 👈 FIX (mydb → testdb)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Root API
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Users API
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

// Start server
app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on 5000");
});
