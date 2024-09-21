const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const userRoutes = require('./routes/user')

const app = express()
const port = process.env.PORT || 9000

//Middleware

app.use(express.json())
app.use('/api', userRoutes)


//Ruta

app.get("/",(req, res) => {
    res.send(`Welcome to mai new API3`)
})



//mondogb coneccion
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB Atlas Zosorrita!!'))
.catch((error) =>console.log(error))

app.listen(port, () => console.log(`Servidor escuchando por el puerto ${port} perra!!`, port));