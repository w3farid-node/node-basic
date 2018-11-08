var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
    console.log('Hello world!');
    res.send("hello world!");
});





app.listen(3000);
console.log("Server is running on port (30000) runnning");