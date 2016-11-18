
// Routes to load your questions and edit pages with questions and edit controllers attached to them!
console.log("APP.JS IS HERE");
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/show.html',
    controller:'questionsController'
  })
  .when('/new',{
    templateUrl:'partials/new.html',
    controller:'questionsController'
  })
  .when('/answer',{
    templateUrl:'partials/answer.html',
    controller:'questionsController'
  })
  .when('/update/:id',{
    templateUrl:'partials/update.html',
    controller:'editController'
  })
  .when('/show1/:id',{
    templateUrl:'partials/show1.html',
    controller:'questionsController'
  })
  .otherwise({
    redirectTo:'/'
  });
})
