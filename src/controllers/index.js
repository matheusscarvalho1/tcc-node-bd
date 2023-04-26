function index (req, res) {
    res.render('index', {
        title:'Login'
    })
}

module.exports = {
    index,
}