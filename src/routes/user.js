const express = require('express')
const userSchema = require('../models/user')


const router = express.Router()



//Crear usuario (RUTA - EndPoint)
router.post('/user', (req, res) =>{
    const user = userSchema(req.body)
    console.log(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get Usuario
router.get('/user', (req, res) =>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Get 1 Usuario
router.get('/user/:id', (req, res) =>{
    const{ id } = req.params
    userSchema
    .findByID(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//UPDATE 1 Usuario
router.put('/user/:id', (req, res) =>{
    const{ id } = req.params
    const{name,age,email} = req.body
    userSchema
    .updateOne({_id: id},{$set: {name,age,email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//DELETE 1 Usuario
router.delete('/user/:id', (req, res) =>{
    const{ id } = req.params
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router