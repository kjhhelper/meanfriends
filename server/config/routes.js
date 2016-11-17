  console.log('SERVER-CONFIG-ROUTES.JS');
// WE NEED TO ADD a few lines of code up here!
var friends=require('../controllers/friends.js');

console.log('routes');
module.exports = function(myApp){
  myApp.get('/friends', friends.index);
  myApp.get('/friends/:id', friends.show);
  myApp.post('/friends', friends.create);
  myApp.put('/friends/:id', friends.update);
  myApp.delete('/friends/:id', friends.delete);
}
// What is this 'friends' object we are referencing below??
// module.exports = function(myApp){
//
//   myApp.get('/friends', function(req,res){
//   friends.index(req,res);
//   })
//   myApp.get('/friends/new', function(req,res){
//   friends.show(req,res);
//   })
//   myApp.post('/friends', function(req,res){
//   friends.create(req,res);
//   })
//   myApp.put('/friends/:id', function(req,res){
//   friends.update(req,res);
//   })
//   myApp.delete('/friends/:id', function(req,res){
//   friends.delete(req,res);
//   })
// }
