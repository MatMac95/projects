const express = require('express');
const bodyParser = require('body-parser');
//const request = require('request');
const https = require("https");
const { log } = require('console');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const data = {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }  
            };

    const jsonData = JSON.stringify(data);
 
    const url = "https://us21.api.mailchimp.com/3.0/lists/7e9de0ca6e/members/"

    const options = {
       
        method: 'POST',
        auth: "matmac:b11211bd8e564197b09488c237bf2e66-us21"
    }
    const request =  https.request(url, options, (response)=>{
      
    response.on("data", (data)=>{
        console.log(JSON.parse(data));
  
    });
   if(response.statusCode === 200){
    res.sendFile(__dirname + '/success.html');
   } else {
    res.sendFile(__dirname + '/failure.html');
   }

    });

    request.write(jsonData);
    request.end();
    

});

app.post("/failure", (req, res)=>{
res.redirect("/");

});
app.listen(port, ()=>{
console.log(`App listening on port ${port}`)
});

//api key
// b11211bd8e564197b09488c237bf2e66-us21


// audience id
// 7e9de0ca6e