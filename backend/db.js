const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "db",          // 💣 VERY IMPORTANT
  user: "root",
  password: "root",
  database: "testdb"
});

module.exports = connection;