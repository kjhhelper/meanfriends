
var express = require('express');
var myApp = express();
var path = require("path");
var root = __dirname;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var routes_setter = require('./server/config/routes.js')(app);
//Create connection to database
require('./server/config/mongoose.js');
myApp.use(bodyParser.json());
// Routes go here!
// var routes_setter = require('./server/config/routes.js');
// routes_setter(myApp);
require("./server/config/routes.js")(myApp);

myApp.use(express.static(path.join(root,'./client')));
myApp.use(express.static(path.join(root,'bower_components')));
// myApp.use(bodyParser.urlencoded({extended:true}));


myApp.listen(8000,function(){
  console.log("server running 8000");

})
