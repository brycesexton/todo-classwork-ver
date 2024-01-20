const express= require ('express')
const app = express()
const todoRouter = require ('./routes/todoRouter')

app.use(express.json())
app.use('/todos', todoRouter)

module.exports = app