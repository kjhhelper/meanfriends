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
    this.show = function(friend,callback){
      $http.get('/friends/:id',friend).then(function(returned_data){
        friends = returned_data.data;
        console.log("friend is", friend );
        console.log("returned_data.data",returned_data.data);
        callback(friends);
      });
    };
//create
    this.create = function(newfriend,callback){
      console.log("this is new friend:",newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
      //   if (typeof(callback) == 'function'){
      //     callback(returned_data.data);
      //   }
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
          callback(returned_data.data);
        });
    };
//delete
    this.delete = function(friend,callback){
      $http.delete('/friends/:id',friend).then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };
    // this.getFriends = function(callback){
    //   callback(friends);
    // };
    //
    // this.getFriend = function(callback){
    //     callback(friend);
    // };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
