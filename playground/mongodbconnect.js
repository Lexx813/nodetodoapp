// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/todoapp', (err, db) => {
 if(err){
   return  console.log('unable to connect to mongodb server');
 } 
 console.log('CONNECTED TO MONGODB SERVER');

//  db.collection('Todos').insertOne({
//    text: 'Something to do',
//    completed:false
//  }, (err, result) => {
//   if(err){
//       return console.log('Unable to insert todo', err);
//   }

//   console.log(JSON.stringify(result.ops, undefined, 2));
//  });

// db.collection('Users').insertOne({
//     name:'Alex',
//     age:'35',
//     location:'Colombia'
// }, (err, result) => {
//     if(err){
//     return   console.log('unable to insert users', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// });


 db.close();
});