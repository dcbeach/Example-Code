const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static("public"));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("listening on port 3000");
});

app.post("/saveSSF", (req, res) => {
  console.log("Current: app.post");
  console.log(req.body);
  console.log(req.body.fname);
});
