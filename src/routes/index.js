const router = require('express').Router()

const CustomersController = require('../controllers/costumers')
const IndexController = require('../controllers/index')

// ROTAS
router.get('/', IndexController.index)


//Registro
router.get('/cadastro', CustomersController.index)
router.post('/cadastro/add', CustomersController.add) 
    
//Registro dos dados
router.get('/app', (req, res) => {
   res.render('app', {
   title:'Conversor'
   })
})

router.post('/app/add', CustomersController.addData)


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


module.exports =  router
