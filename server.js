// SERVER.JS

var express = require('express')
var mongoose = require('mongoose')
var request = require('request')
var bodyParser = require('body-parser')
var Bear     = require('./models/User.js');
var app = express()


//////////////////////// CONNECT TO THE DATABASE//////////////////////////
mongoose.connect('mongodb://localhost/myappdatabase')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================

app.listen(port,function() {
  console.log("app listening on port 3000")
})
