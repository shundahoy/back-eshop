const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello API");
});
app.listen(3000, () => {
  console.log("server runninng http://localhost:3000");
});
