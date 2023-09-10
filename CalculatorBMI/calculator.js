const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  res.send("Thanks for posting");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const weight = req.body.weight;
  const heightInCentymeters = req.body.height;
  const heightInMeters = heightInCentymeters / 100;
  const BMI = weight / (heightInMeters * heightInMeters);
  res.send("Twój wynik to: " + BMI.toFixed(1));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
