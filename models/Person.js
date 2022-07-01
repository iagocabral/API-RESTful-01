//Models, aqui é onde voce criar a struct que sera salva pelo banco de dados MongoDB

const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name : String,
    numero : Number,
    email: String,
    data : String,
    anotacao: String,
})

module.exports = Person
