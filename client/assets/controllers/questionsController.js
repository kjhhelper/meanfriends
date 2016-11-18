myApp.controller('questionsController',['$scope','questionsFactory','location',function($scope, questionsFactory, location){
  $scope.questions=[];
console.log("MyApp.Controller is here");
questionsFactory.index(function(Data){
$scope.questions = Data;
})

$scope.create=function(Data){
  questionsFactory.create($scope.newquestion, function() {
    console.log('hello, where am i');
  });
  console.log("new controller FOR CREATE working");
  console.log($scope.newquestion);
  $scope.newquestion={};
    // $location.url('/show');
}
//

$scope.delete = function(Data){
  console.log(Data);
  questionsFactory.delete(Data, function (res) {
    console.log(res);//console log the returned_data.data from factory
  });
  console.log("new controller FOR DELETE working");
  console.log(Data);//undefined
  // $scope.question={};
  questionsFactory.index(function(Data){
  $scope.questions = Data;
  })
  };
    questionsFactory.show($routeParams.id,function(res){
      console.log(res);
      $scope.question=res;

});
}]);
