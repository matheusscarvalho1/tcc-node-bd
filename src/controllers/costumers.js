const CostumersModel = require('../models/costumers')
const { crypto } = require('../utils/passwords')

function index (req, res) {
    res.render('cadastro', {
       title:'Cadastro'
   })
}

async function add (req, res) {
    const {
        name,
        rga,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto (password)
    
    const register = new CostumersModel({
        name,
        rga,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.send('cadastro realizado!')

}

async function addData (req, res) {
    const {
        name,
        rga,
        email,
        curso,
        tele,
        tipo,
        arq,
        hrasD,
        msg,

    } = req.body

    
    const register = new CostumersModel({
    
        name,
        rga,
        email,
        curso,
        tele,
        tipo,
        arq,
        hrasD,
        msg,
    })

    register.save()
    res.send('cadastro realizado!')

}



module.exports = {
    add,
    index,
    }