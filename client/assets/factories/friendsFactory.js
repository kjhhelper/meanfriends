console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http',function($http){
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    //index
    this.index = function(callback){//call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
    };
    //show
    this.show = function(id,callback){
      $http.get('/friends/'+id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
//create
    this.create = function(newfriend,callback){
      console.log("this is new friend:",newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
       });
    };
//update
    this.update = function(id,friend,callback){
      //parameter
        $http.put('/friends/'+id,friend).then(function(returned_data){
          console.log("FAC:friendsFactory working******");
          console.log('FAC:/friends/'+id);
          console.log("FAC:",returned_data.data); // FAC: Object {ok: 1, nModified: 1, n: 1}
          friend=returned_data.data;
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }
        });
    };
//delete
    this.delete = function(id,callback){
      $http.delete('/friends/'+id).then(function(returned_data){
        console.log("deleted-factory");
        // friends = returned_data.data;
        if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }});
    };
  }
  return new FriendsFactory();
}]);
