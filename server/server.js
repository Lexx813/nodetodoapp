const express = require('express');
const bodyParser =require('body-parser');

var {mongoose} =require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');


const app =express();


app.use(bodyParser.json());




///////////////////////////////////////////////
///////////////ROUTES

////////POST ROUTE
app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
         res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});
/////////////////////
///////////GET ROUTE
app.get('/todos', (req,res) => {
   Todo.find().then((todos)=> {
  res.send({todos})
   }, (e) => {
  res.status(400).send(e);
   })
});


app.listen(3000, () => {
    console.log('SERVER STARTED ');
})


module.exports= {app}