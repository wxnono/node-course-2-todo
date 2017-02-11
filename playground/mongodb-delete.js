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

//deleteMany

// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then(function(result){
// //if(err) return console.log("errors")
//
// console.log(result);
//
//
// });

db.collection('Todos').findOneAndDelete({completed: false}).then(function(result){
  console.log(result);
});




//deleteOne



//findOneAndDelete



//db.close();

});
