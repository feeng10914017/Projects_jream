var express = require('express')
var router = express.Router()

/* GET home page. */
// GET http://localhost:5000/product/

router.get('/', function (req, res, next) {
  var db = req.con

  db.query('SELECT * FROM product', function (err, rows) {
    if (err) {
      console.log(err)
    }

    res.send(JSON.stringify(rows))
  })
})

// POST http://localhost:5000/product/new
router.post('/new', (req, res, next) => {
  var db = req.con
  db.query(
    `INSERT INTO product (title, description, content, category, sub_category, price) VALUES ('${req.body.title}', '${req.body.description}', '${req.body.content}', '${req.body.category}', '${req.body.sub_category}', ${req.body.price})`,
    (err, rows) => {
      if (err) {
        console.error(err)
        res.send(JSON.stringify({ success: false }))
      } else {
        res.send(JSON.stringify({ success: true }))
      }
    }
  )
})

module.exports = router
