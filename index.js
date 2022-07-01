//config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Forma de ler JSON /middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//Rotas da API, leva para personRoutes.js onde faz o CRUD da pessoa
    const personRoutes = require('./routes/personRoutes')
    app.use('/person', personRoutes)

//Rota teste
app.get('/', (req, res) =>{
    res.json({message: "Hello World"})
})

//Conectando com o banco de dados(mongoDB) e ligando o localhost(3000)
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.wnh93vx.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("conectado com sucesso ao mongoDB")
    app.listen(3000)
})
.catch((err) => console.log(err))
