var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	bcrypt = require("bcrypt-nodejs"),
	jwt = require("jsonwebtoken");
	// config = require("./config.js");

//#Controllers

// var userCtrl = require("./controllers/userCtrl.js");

app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type Accept, loginToken");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

//#Endpoints

// app.post("/api/login", userCtrl.Login);
// app.get("/api/loggedin", userCtrl.LoggedIn);
// app.post("/api/register", userCtrl.RegisterNewLogin);
/*
mongoose.connect("mongodb://localhost:27017/salono");
mongoose.connection.once("open", function(){
	console.log("Connected to Mongodb\n");
});
*/
app.listen(80, function(){
	console.log("\nListening on Port 80");
});
