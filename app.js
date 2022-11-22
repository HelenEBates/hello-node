const express = require("express");
const app = express();
const port = 8000;

// callback route handler function
app.get("/", function (req, res) {
  res.send("Happy Christmas World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
