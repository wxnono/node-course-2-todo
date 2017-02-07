//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
//
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
  return console.log('Unale to connect to MongoDB server');
}
console.log('Connected to MongoDB server ');

db.collection('Todos').find({completed:true}).toArray().then(function(docs){
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));

}, function(err){
  console.log('Unable to connect',err);
});




//db.close();

});
