const mongoose = require('mongoose')

//CADASTRO DE USUARIOS
const schemaC = new mongoose.Schema ({
    name: String,
    rga: Number,
    email: String,
    password: String,
    
}, {timestamps: true})

const ModelC = mongoose.model('Users', schemaC)

//CADASTRO DE DADOS P REGISTRAR AS HORAS
const schemaD = new mongoose.Schema ({
    name: String,
    rga: Number,
    email: String,
    password: String,
    
}, {timestamps: true})
const ModelD = mongoose.model('Datas', schemaD)

module.exports = ModelC
    
