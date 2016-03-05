// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a Schema
var userSchema = new Schema({
  name: String,
  username: {type: String, required: false, unique: false},
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String,
  },
  created_at: Date,
  updated_at: Date
})

// create a model using a Schema
var User = mongoose.model('User', userSchema)

// make this available to our users in Node app
module.exports = User
