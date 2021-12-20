const express = require('express')
const app = express()

const db = require('./db')
const Todo = require('./todo')
 
app.use(express.json())
app.get('/', (req, res) => {
  res.json('GET / is Working ...')
})

app.get('/tasks', (req, res) => {
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
app.listen(5000,() => {
  console.log("SERVER IS WORKING SUCCESSFULLY .")
})



// Git Bash : nodemon server.js