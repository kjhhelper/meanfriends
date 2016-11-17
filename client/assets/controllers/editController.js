

 myApp.controller('editController',['$scope','$location','$routeParams','friendsFactory',
 function($scope,$location,$routeParams,friendsFactory){
  //  $scope.friend=[];
   console.log("CON",$routeParams.id);//working

   $scope.update = function(Data){
    //  $scope.friends = Data;
    friendsFactory.update($routeParams.id,$scope.friend);
// $scope.friend={};
      // function(){
      // console.log("CON",$scope.friend,"has been shown!");//working
//argument
$location.url('/');
    //})


    }}]);

    // $scope.create=function(Data){
    //   friendsFactory.create($scope.newfriend);
    //   console.log("new controller FOR CREATE working");
    //   console.log($scope.newfriend);
    //   $scope.newfriend={};
    // }
    //
    // $scope.update = function(Data){
    //   friendsFactory.update($scope.friend);
    //   console.log("new controller FOR UPDATE working");
    //   $scope.friend={};
    //     };
