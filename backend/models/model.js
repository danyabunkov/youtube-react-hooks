const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/BackTodoList', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new Schema({
  title:String,
  date:Date,
  completed:Boolean,
})

const Todo = model('Todo', todoSchema)


module.exports = model('Todo',todoSchema)
