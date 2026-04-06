const express = require("express");
const db = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend running v2 🚀");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
});

setTimeout(() => {
  app.listen(3000, "0.0.0.0", () => {
    console.log("Server running");
  });
}, 8000);