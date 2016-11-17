myApp.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory){
  $scope.friends=[];

friendsFactory.index(function(Data){
$scope.friends = Data;
})

$scope.create=function(Data){
  friendsFactory.create($scope.newfriend);
  console.log("new controller FOR CREATE working");
  console.log($scope.newfriend);
  $scope.newfriend={};
}

$scope.update = function(Data){
  friendsFactory.update($scope.friend);
  console.log("new controller FOR UPDATE working");
  $scope.friend={};
    };

$scope.delete = function(Data){
  friendsFactory.delete($scope.friend);
  console.log("new controller FOR DELETE working");
    callback(friends);
  };

  $scope.show = function(Data){
    friendsFactory.show($scope.friend);
    console.log("new controller FOR SHOW working");
      callback(friends);
    };
}]);
