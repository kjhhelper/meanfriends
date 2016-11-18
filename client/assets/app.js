
// Routes to load your new and edit pages with new and edit controllers attached to them!
console.log("APP.JS IS HERE");
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/show.html',
    controller:'newController'
  })
  .when('/new',{
    templateUrl:'partials/new.html',
    controller:'newController'
  })
  .when('/update/:id',{
    templateUrl:'partials/update.html',
    controller:'editController'
  })
  .when('/show1/:id',{
    templateUrl:'partials/show1.html',
    controller:'newController'
  })
  .otherwise({
    redirectTo:'/'
  });
})
