const express = require('express')
const router = express.Router()
// var app = express()
// require('dotenv').config()
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var mysql = require('mysql')
var conn = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'jream',
})

router.post('/', function (req, res) {
  let sqlKey = `INSERT INTO member set memberName ='${req.body.memberName}', memberBirth='${req.body.memberBirth}',memberEmail='${req.body.memberEmail}',password='${req.body.password}'`
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log('/', obj)

  conn.query(sqlKey, [], function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err))
      res.status = '註冊失敗。'
      res.err = '伺服器錯誤，請稍後在試！'
      return
    }
    if (rows.length > 0) {
      const id = rows[0].id
      console.log('id', id)
      res.send(JSON.stringify(rows[0]))
    } else {
      res.send(JSON.stringify({ result: false }))
    }
  })
})

router.post('/:id', function (req, res, next) {
  let sqlKey = `INSERT INTO member set memberName='${req.params.memberName}', memberBirth='${req.params.memberBirth}',memberEmail='${req.params.memberEmail}',password='${req.params.password}'`
  const obj = JSON.parse(JSON.stringify(req.params))
  console.log('/:id', obj)

  conn.query(sqlKey, [], function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err))
      res.status = '註冊失敗。'
      res.err = '伺服器錯誤，請稍後在試！'
      return
    }
    if (rows.length > 0) {
      console.log('rows', rows[0].id)
      let returnData = { result: true, member: rows[0].id }
      res.send(JSON.stringify(returnData))
    } else {
      res.send(JSON.stringify({ result: false }))
    }
  })
})

module.exports = router
