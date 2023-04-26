const router = require('express').Router()

const CustomersController = require('../controllers/costumers')
const IndexController = require('../controllers/index')

// ROTAS
router.get('/', IndexController.index)



router.get('/cadastro', CustomersController.index)

// CONTROLLER
router.post('/cadastro/add', CustomersController.add) 
    


router.get('/homepage', (req, res) => {
   res.render('homepage', {
       title:'Homepage'
   })
})

router.get('/app', (req, res) => {
   res.render('app', {
   title:'Conversor'
   })
})

router.get('/duvidas', (req, res) => {
   res.render('duvidas', {
   title:'Duvidas'
   })
})


module.exports =  router
