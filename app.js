const express = require("express");
const functions = require("./function");
const path = require("path");
const port = 9000;
const app = express();

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "21.02.2021",
    subTitle: functions.someText,
  });
});

app.get("/about", function (req, res) {
  res.send("strona o mnie");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Bład ${err}`);
  }
  console.log(`Strona Działa na porcie ${port}`);
});
