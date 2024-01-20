const app = require ('./app')
const mongoose = require ('mongoose')
require ('dotenv').config()
const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo correctly')
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})