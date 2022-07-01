//config inicial
const router = require('express').Router()
const Person = require('../models/Person')

//Create - criação de uma nova Person
router.post('/', async (req, res) =>{
    const {name, numero, email, data, anotacao} = req.body
    if(!name){
        res.status(422).json({error: "O nome é obrigatorio"})
        return
    }
    const person = {
        name,
        numero,
        email,
        data,
        anotacao
    }
    // create moongose method
    try {
        await Person.create(person) 
        res.status(201).json({message: 'Pessoa cadastrada com sucesso'})
    } catch(error){
        res.status(500).json({error: error})
    }
})

// Ver a lista de Persons ja criadas
router.get('/', async (req,res) => {
    try{
        const people = await Person.find()
        res.status(200).json(people)
    }catch(error){
        res.status(500).json({error: error})
    }
})

// Achar usuario expecifico pesquisa por id "{{url}}/person/:id"
router.get('/:id', async (req,res) => {
    //extrair dados da requisição, pela url - req.params
    const id = req.params.id
    try{
        const person = await Person.findOne({_id: id})
        if(!person){
            res.status(422).json({message: "usario not found"})
            return
        }
        res.status(200).json(person)
    }catch(error){
        res.status(500).json({error: error})
    }
})

// Update - atualização de dados(PUT, PATCH)
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {name, numero, email, data, anotacao} = req.body
    const person = {
        name,
        numero,
        email,
        data,
        anotacao
    }

    try{
        const updatedPerson = await Person.updateOne({_id: id}, person)
        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message: "usario not found!"})
            return
        }
        res.status(200).json(person)
    }catch(error){
        res.status(500).json({error: error})
    }
})

// Delete - Deletar dados
router.delete("/:id", async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({_id:id})
    if(!person){
        res.status(422).json({message: "usario not found!"})
        return
    }
    try{
        await Person.deleteOne({_id:id})
        res.status(200).json({message: "Usario removido com sucesso"})
    }catch(error){
        res.status(500).json({error: error})
    }
})
module.exports = router