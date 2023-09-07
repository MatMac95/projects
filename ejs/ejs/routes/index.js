var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Respond to POST request on the root route (/), the application’s home page:
router.post("/", (req, res) => {
  res.send("Got a POST request");
});
module.exports = router;
