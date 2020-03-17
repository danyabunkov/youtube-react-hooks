var express = require('express');
var router = express.Router();
const Todo = require('../models/model')

/* GET home page. */
router.get('/', async function(req, res) {
 const todos= await Todo.find();
res.json(todos)
});

module.exports = router;
