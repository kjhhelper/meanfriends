  console.log('SERVER-CONFIG-ROUTES.JS');
// WE NEED TO ADD a few lines of code up here!
var questions=require('../controllers/questions.js');

console.log('Server-Config-Routes');
module.exports = function(myApp){
  myApp.get('/questions', questions.index);
  myApp.get('/questions/:id', questions.show);
  myApp.post('/questions', questions.create);
}
// What is this 'questions' object we are referencing below??
// module.exports = function(myApp){
//
//   myApp.get('/questions', function(req,res){
//   questions.index(req,res);
//   })
//   myApp.get('/questions/new', function(req,res){
//   questions.show(req,res);
//   })
//   myApp.post('/questions', function(req,res){
//   questions.create(req,res);
//   })
//   myApp.put('/questions/:id', function(req,res){
//   questions.update(req,res);
//   })
//   myApp.delete('/questions/:id', function(req,res){
//   questions.delete(req,res);
//   })
// }
