const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { jsPDF } = require("jspdf");

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

  createSSF(req.body);
});

function createSSF(dataObj) {
  var img = fs.readFileSync("./public/SampleSSF.png");
  var options = { orientation: "p", unit: "mm" };
  var doc = new jsPDF(options);

  //Add the SSF Background
  doc.addImage(img, "PNG", 0, 0, 210, 125);

  doc.setFontSize(12);

  //Place text in appropriate text box
  doc.text(42, 47, dataObj.fname);
  doc.text(42, 52, dataObj.lname);
  doc.text(42, 57, dataObj.pnumber);

  //Save the file to same directory as server.js
  doc.save("testFile.pdf");
}
