console.log('questions Factory');
myApp.factory('questionsFactory', ['$http',function($http){
  var questions = [];
  var question = {};
  function questionsFactory(){
    var _this = this;
    //index
    this.index = function(callback){//call this method if you want to update or set the questions variable
      $http.get('/questions').then(function(returned_data){
        console.log(returned_data.data);
        questions = returned_data.data;
        callback(questions);
      });
    };
    //show
    this.show = function(id,callback){
      $http.get('/questions/'+id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
//create
    this.create = function(newquestion,callback){
      console.log("this is new question:",newquestion);
      $http.post('/questions', newquestion).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
       });
    };
//update
    // this.update = function(id,question,callback){
    //   //parameter
    //     $http.put('/questions/'+id,question).then(function(returned_data){
    //       console.log("FAC:questionsFactory working******");
    //       console.log('FAC:/questions/'+id);
    //       console.log("FAC:",returned_data.data); // FAC: Object {ok: 1, nModified: 1, n: 1}
    //       question=returned_data.data;
    //       if (typeof(callback) == 'function'){
    //         callback(returned_data.data);
    //       }
    //     });
    // };

  }
  return new questionsFactory();
}]);
