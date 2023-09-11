const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const PORT = 3000;

const app = express();
const items = [];
const itemsWork = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const day = date.getDate();

  res.render("list", { listType: "home", kindOfDay: day, list: items });
});

app.get("/work", (req, res) => {
  const day = date.getDay();

  res.render("list", { listType: "work", kindOfDay: day, list: itemsWork });
});

app.post("/", (req, res) => {
  if (req.body.button === "work") {
    itemsWork.push(req.body.listElement);
    res.redirect("/work");
  } else {
    items.push(req.body.listElement);
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
