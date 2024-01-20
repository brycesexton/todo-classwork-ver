const todoController = require('../controllers/todoController')
const express = require('express')
const router = express.Router()

router.get('/', todoController.index) //index
router.delete('/:id', todoController.destroy) //delete
router.put('/:id', todoController.update) //update
router.post('/', todoController.create) //create
router.get('/:id', todoController.show) //show

module.exports = router