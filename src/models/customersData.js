const mongoose = require('mongoose')

//CADASTRO DE DADOS P REGISTRAR AS HORAS
const schemaDatas = new mongoose.Schema ({
    nome: String,
    rga: Number,
    email: String,
    curso: String,
    telefone: Number,
    tipo: String,
    arq: String,
    hrasD: Number,
    msg: String,

    
}, {timestamps: true})
const ModelD = mongoose.model('Datas', schemaDatas)

module.exports =  ModelD