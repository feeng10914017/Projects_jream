var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/aaa', function (req, res, next) {
  var db = req.con
  var data = ''

  db.query('SELECT * FROM product', function (err, rows) {
    if (err) {
      console.log(err)
    }
    var data = rows

    // use index.ejs
    console.log('data', data)
    res.send(data)
  })
})

module.exports = router
