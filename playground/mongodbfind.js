// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('CONNECTED TO MONGODB SERVER');

//     db
//         .collection('Todos')
//         .find({
// _id : new ObjectID('5a1993a5b95481163c54e718')
//         })
//         .toArray()
//         .then((docs) => {
//             console.log('Todos');
//             console.log(JSON.stringify(docs, undefined, 2));
//         }, (err) => {
//             console.log('unable to fecth todos', err);
//         });

// db
//     .collection('Todos')
//     .find()
//     .count()
//     .then((count) => {
//         console.log(`Todos count: ${count}`);

//     }, (err) => {
//         console.log('unable to fecth todos', err);
//     });

db
    .collection('Users')
    .find({name:'Alex'})
    .toArray()
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fecth todos', err);
    });

    // db.close();
});