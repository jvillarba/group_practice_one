// SERVER.JS

var express     = require('express')
var mongoose    = require('mongoose')
var request     = require('request')
var bodyParser  = require('body-parser')
var logger      = require('morgan')
var app         = express()
var dbURL       = 'mongodb://localhost/myappdatabase'

var User        = require('./models/User.js')
var Post        = require('./models/Post.js')
var apiRouter   = require('./routes/user.js')
//var indexRouter = require('./routes/post.js')


//////////////////////// CONNECT TO THE DATABASE//////////////////////////
mongoose.connect(dbURL, function(err) {
    if(err) throw err
    // inform the user that the connection was successful
    console.log("connected to: ", dbURL)
})

// configure app to use bodyParser() and logger
// this will let us get the data from a POST
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter)
//app.use('/index', indexRouter)

// START THE SERVER
// =============================================================================

app.listen(port,function() {
  console.log("app listening on port 3000")
})
