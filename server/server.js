var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

///everthing you want to store

var app=express();

app.use(bodyParser.json());

app.post('/todos',function(req,res){
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then(function(doc){
    res.send(doc);
  }, function(e){
    res.status(400).send(e);
  });
});


//get






app.listen(3002,function(){
  console.log('Started on Port 3002');
});





// save something
