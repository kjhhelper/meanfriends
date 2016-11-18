console.log('MODELS-questionS.JS');
var mongoose = require('mongoose');
// build your questions schema and add it to the mongoose.models
var QuestionSchema = new mongoose.Schema({
  question:String,
  description:String
},{timestamps : true })
mongoose.model('questions',QuestionSchema);
var questions = mongoose.model('questions');
