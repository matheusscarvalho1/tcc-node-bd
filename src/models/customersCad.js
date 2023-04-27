const mongoose = require('mongoose')

//CADASTRO DE USUARIOS
const schemaCad = new mongoose.Schema ({
    name: String,
    rga: Number,
    email: String,
    password: String,
    
}, {timestamps: true})
const ModelC = mongoose.model('Users', schemaCad)

module.exports =  ModelC