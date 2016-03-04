// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
  title: String,
  content: String,
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

// create a model using Schema
var Post = mongoose.model('Post', postSchema)

// make this available to our users in our Node app
module.exports = Post
