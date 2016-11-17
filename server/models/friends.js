console.log('MODELS-FRIENDS.JS');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  birthday: Date
},{timestamps : true })
mongoose.model('Friend',FriendSchema);
var Friend = mongoose.model('Friend');
