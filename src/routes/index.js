const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')
const AppController = require('../controllers/app')

//Rotas
router.get('/', IndexController.index)


//Cadastro
router.get('/cadastro', CustomersController.index)
router.post('/cadastro/add', CustomersController.add) 
    

//Registro dos dados
router.get('/app', AppController.app)
router.post('/app/add', CustomersController.addData)


//Listar dados
router.get('/appList', CustomersController.listData)

router.get('/homepage', (req, res) => {
   res.render('homepage', {
       title:'Homepage'
   })
})

router.get('/duvidas', (req, res) => {
   res.render('duvidas', {
   title:'Duvidas'
   })
})

router.get('/appList', (req, res) => {
   res.render('appList', {
       title:'Horas Cadastradas'
   })
})

module.exports =  router
