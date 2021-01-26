const express = require('express')
const router = express.Router()
// var app = express()
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var mysql = require('mysql')

// require('dotenv').config()
var conn = mysql.createConnection({
  user: 'root',
  password: '12345',
  host: 'localhost',
  database: 'jream',
})

// 登入
router.post('/', function (req, res) {
  //驗證用戶是否存在
  // let sqlKey = `select * from member`
  let sqlKey = `select * from member where memberEmail='${req.body.memberEmail}' and password='${req.body.password}'`
  //這樣寫才對
  const obj = JSON.parse(JSON.stringify(req.body)) // req.body = [Object: null prototype] { title: 'product' }
  //這樣寫才對
  console.log('/', obj)

  conn.query(sqlKey, [], function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err))
      res.status = '登入失敗。'
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
  //驗證用戶是否存在
  let sqlKey = `select * from member where memberEmail='${req.params.memberEmail}' and password='${req.params.password}'`
  //這樣寫才對
  const obj = JSON.parse(JSON.stringify(req.params))
  console.log('/:id', obj)
  conn.query(sqlKey, [], function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err))
      res.status = '登入失敗。'
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
