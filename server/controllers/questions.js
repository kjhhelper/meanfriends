console.log('CONTROLLER-questionS.JS');
// WE NEED TO ADD A FEW lines of code here!
var mongoose=require('mongoose');
var questions= mongoose.model('questions');
// How does a controller talk to mongoose and get a model?
// Build out the methods in the questionsControllers below

function questionsController(){
  this.index = function(req,res){
    questions.find({},function(err,question){
    res.json(question);
  })};

  this.create = function(req,res){
console.log("@@@@@@@@@@@@@@@@@");
    console.log(req.body);
    var question= new question(req.body);
    questions.save(function(err){
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
  //{{question._id}}->from mongodb

  this.update = function(req,res){
    questions.update({_id:req.params.id},req.body,
    function(err, question){
      console.log("req.body.firstname is:::",req.body.firstname);//[]
      console.log("req.params.id is:::",req.params.id);

        if(err){
          console.log("something wrong",err);
        }else{
          console.log("backend questions controllerssssssssss");
          console.log(question)//;{ ok: 1, nModified: 1, n: 1 }
          res.json(question);
        }
    })
  };

  this.delete = function(req,res){
    console.log("serverside ctrl->delete");
    questions.remove({_id:req.params.id},function(err){
    if(err){
      console.log('something went wrong');}
    else{
      console.log("deleted-server");
      res.json({success: true});
      // res.redirect('/questions');
    }
  })
  };
  this.show = function(req,res){
    questions.findOne({_id:req.params.id},function(err,question){
    if(err){
      console.log('something went wrong');}
    else{
    res.json(question);
    }
  })}
}//questionsController closing

module.exports = new questionsController(); // what does this export?
