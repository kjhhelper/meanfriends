console.log('CONTROLLER-FRIENDS.JS');
// WE NEED TO ADD A FEW lines of code here!
var mongoose=require('mongoose');
var Friend= mongoose.model('Friend');
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below

function FriendsController(){
  this.index = function(req,res){
    Friend.find({},function(err,friend){
    res.json(friend);
  })};

  this.create = function(req,res){
console.log("@@@@@@@@@@@@@@@@@");
    console.log(req.body);
    var friend= new Friend(req.body);
    friend.save(function(err){
      if(err){
        console.log("something wrong");
      }else{
        console.log({placeholder:'create'});
        res.json({placeholder:'create'});
      }
  })
  };

//From platform...
//User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
  //req.params.id->from routes(address)
  //req.body.firstname->from form input
  //{{friend._id}}->from mongodb

  this.update = function(req,res){
    Friend.update({_id:req.params.id},req.body,
    function(err, friend){
      console.log("req.body.firstname is:::",req.body.firstname);//[]
      console.log("req.params.id is:::",req.params.id);

        if(err){
          console.log("something wrong",err);
        }else{
          console.log("backend friends controllerssssssssss");
          console.log(friend)//;{ ok: 1, nModified: 1, n: 1 }
          res.json(friend);
        }
    })
  };

  this.delete = function(req,res){
    console.log("serverside ctrl->delete");
    Friend.remove({_id:req.params.id},function(err){
    if(err){
      console.log('something went wrong');}
    else{
      console.log("deleted-server");
      res.json({success: true});
      // res.redirect('/friends');
    }
  })
  };
  this.show = function(req,res){
    Friend.findOne({_id:req.params.id},function(err,friend){
    if(err){
      console.log('something went wrong');}
    else{
    res.json(friend);
    }
  })}
}//FriendsController closing

module.exports = new FriendsController(); // what does this export?
