const todo = require ('../models/todo')

exports.index = async (req, res) => {
    try {
        const todos = await todo.find({})
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json({ msg: error.message })
}}

exports.create = async (req, res) => {
//make a new todo
    try {
        const todo = await Todo.create(req.body)
        res.status(201).json(todo)

    } catch (error) {
        res.status(400).json({ message: error.message })
  }
}
exports.update = async (req, res) => {
//update a todo that already exists
    try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id},
        req.body, { new: true })
    } catch (error) {
        res.status(400).json({ message: error.message })
  }
}

exports.destroy = async function(req, res) {
    // delete a todo that was already made
    try {
        const deleted = await Todo.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ msg: `Deleted todo with the id ${deleted._id}` })
    } catch(err) {
        res.status(400).json({msg: error.message})
    }
}

exports.show = async function show(req, res) {
    // show 1 individual todo
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.status(200).json(foundTodo)
    
    } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }