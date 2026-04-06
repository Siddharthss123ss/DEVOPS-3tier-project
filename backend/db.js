const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "db",
  user: "root",
  password: "root",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log("MySQL Pool Created ✅");

module.exports = connection;