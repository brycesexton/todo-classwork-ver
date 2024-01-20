const todo = require ('../models/todo')

exports.indexTodo = async (req, res) => {
    try {
        const todos = await todo.find({})
        res.status(200).json(todos)
} catch (error) {
        res.status(400).json({ msg: error.message })
}}

exports.createTodo = async (req, res) => {
//make a new todo
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
exports.updateTodo = async (req, res) => {
//update a todo that already exists
}
exports.deleteTodo = async (req, res) => {
//delete a todo
} 

exports.idOfTodo = async (req, res) => {
//show 1 todo
}