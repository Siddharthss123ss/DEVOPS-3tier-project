const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend running on EC2 🚀");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Siddharth" },
    { id: 2, name: "Rahul" }
  ]);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});