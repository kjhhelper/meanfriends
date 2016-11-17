myApp.controller('showoneController',['$scope','$location','$routeParams','friendsFactory', function($scope,$routeParamsID, friendsFactory){

  $scope.show = function($routeParams.id){
   friendsFactory.show($routeParam.id,$scope.friend,function(){
     console.log($scope.friend,"has been shown!");
   })
   $scope.friend={};
     $location.url('/');
