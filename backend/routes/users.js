var express = require('express');
var router = express.Router();
const Todo = require('../models/model')

/* GET users listing. */
router.post('/',function(req, res, next) {
  const {title} =req.body;
  console.log(title)
  const todo=new Todo({title:title, completed:false, date:Date.now()});
  console.log(todo)
  todo.save();
  res.json(todo);
});

module.exports = router;
