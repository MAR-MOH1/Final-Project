const express = require('express')
const app = express()

const db = require('./db')
const Todo = require('./todo')
 
app.use(express.json())
app.get('/', (req, res) => {
  res.json('GET / is Working ...')
})

app.get('/tasks', (req, res) => {
  Todo.find({}, (err , data) => {
    if (err) {
      console.log("ERROR:" , err);
    }else{
      res.json(data);
    }
  });
});

app.post("/tasks", (req , res) => {

  Todo.create(req.body , (err , newTask) => {
    if (err){
      console.log("ERROR: " , err);
    } else{
      res.status(201).json(newTask);
    }
  });
})

app.delete("/tasks/:id" , (req , res) => {
  console.log(req.params.id);

  Todo.deleteOne({_id: req.params.id},(err, deleteObj) => {
    if (err){
      console.log("ERROR: " , err);
    } else{
      deleteObj.deletedCount === 1
      ? res.json("Delete One Todo Successuflly")
      : res.status(404).json("NOT FOUND")
  
    }
  });
});


app.put("/tasks/:id" , (req , res) => {

  Todo.updateOne(
    { _id: req.params.id},
    {title: req.body.newTitle},
    (err, updateObj) => {
    if (err){
      console.log("ERROR: " , err);
      res.status(400).json(err)
    } else{
      console.log(updateObj);
      updateObj.modifiedCount === 1
      ? res.json("Update One Todo Successuflly")
      : res.status(404).json("NOT FOUND");
    }
  });
});

app.listen(5000,() => {
  console.log("Server is Working Successfully ...")
})



// Git Bash : nodemon server.js