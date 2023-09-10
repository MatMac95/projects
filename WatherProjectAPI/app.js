const { log } = require("console");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/index.html");

});

app.post("/", (req, res) => {

    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=15eb2b6b64ed0c4905844025c302b4f0";
    https.get(url, (respond) =>{
        respond.on('data', (data) => {  
       const wetherData = JSON.parse(data);
       const temp = wetherData.main.temp;
       const description = wetherData.weather[0].description
       const icon = wetherData.weather[0].icon;
       res.write("<h1>Temperature: " + temp + "</h1> \n");
       res.write("<h2>" + description + "</h2>");
       res.write('<img src="https://openweathermap.org/img/wn/' + icon + '@2x.png"> ');
       res.send();
       
                });

            });
    
    
});

   











app.listen(3000, () => {
    console.log("Server is running...");
});