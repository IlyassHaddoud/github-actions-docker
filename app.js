import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ Msg: "Hello World" });
});

app.get("/new", (req, res) => {
  res.json({ Msg: "New Route" });
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
