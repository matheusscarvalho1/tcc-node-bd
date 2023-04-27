const CustomersModelCad = require('../models/customersCad')
const CustomersModelData = require('../models/customersData')

const { crypto } = require('../utils/passwords')



function index (req, res) {
    res.render('cadastro', {
       title:'Cadastro'
   })
}

function app (req, res) {
    res.render('app', {
    title:'Conversor'
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
    
    const register = new CustomersModelCad({
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
        nome,
        rga,
        email,
        curso,
        telefone,
        tipo,
        arq,
        hrasD,
        msg,

    } = req.body

    
    const register = new CustomersModelData({
    
        nome,
        rga,
        email,
        curso,
        telefone,
        tipo,
        arq,
        hrasD,
        msg,
    })

    register.save()
    res.send('cadastro realizado!')

}

async function listData (req, res) {
   const dataUsers = await CustomersModelData.find()

    res.render('appList', {
    title: 'Listagem e cadastro de dados',
    dataUsers,
    })
}


module.exports = {
    add,
    addData,
    index,
    app,
    listData,
    }