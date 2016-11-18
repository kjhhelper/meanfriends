myApp.controller('newController', ['$scope','friendsFactory','$routeParams','$location', function($scope, friendsFactory,$routeParams,$location){
  $scope.friends=[];

friendsFactory.index(function(Data){
$scope.friends = Data;
})

$scope.create=function(Data){
  friendsFactory.create($scope.newfriend, function() {
    console.log('hello, where am i');
  });
  console.log("new controller FOR CREATE working");
  console.log($scope.newfriend);
  $scope.newfriend={};
    $location.url('/show');
}
//

$scope.delete = function(Data){
  console.log(Data);
  friendsFactory.delete(Data, function (res) {
    console.log(res);//console log the returned_data.data from factory
  });
  console.log("new controller FOR DELETE working");
  console.log(Data);//undefined
  // $scope.friend={};
  friendsFactory.index(function(Data){
  $scope.friends = Data;
  })
  };

  // $scope.show = function(Data){
    friendsFactory.show($routeParams.id,function(res){
      console.log(res);
      $scope.friend=res;
    });
    // $scope.friend={};
    // $location.url('/show1/'+Data);
    // };



}]);
