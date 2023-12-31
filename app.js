const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ Msg: "Hello World" });
});

app.get("/new", (req, res) => {
  res.json({ Msg: "New Route" });
});

app.get("/add", (req, res) => {
  res.json({ Msg: "Add Route" });
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
