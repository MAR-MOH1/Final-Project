const {Schema , model} = require("mongoose");

const todoSchema = new Schema({
    title: String,
    isCompletad: Boolean
})


// Model

const Todo = model('Todo' , todoSchema)
module.exports = Todo