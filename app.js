import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ Msg: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
