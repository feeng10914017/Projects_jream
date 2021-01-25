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

router.put('/', function (req, res) {
  let sqlKey = `update member set memberName='${req.body.memberName}', memberNickName='${req.body.memberNickname}', 
  memberBirth='${req.body.memberBirth}',
  memberGender='${req.body.memberGender}',
  memberEmail='${req.body.memberEmail}',
  memberPhone='${req.body.memberPhone}',
  memberTelephone='${req.body.memberTelephone}',
  memberAddress='${req.body.memberAddress}'
  where id='${req.body.id}' or valid=1`

  const obj = JSON.parse(JSON.stringify(req.body))
  console.log('/ud', obj)

  conn.query(sqlKey, [], function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err))
    }
    res.send(JSON.stringify(rows))
  })
})

router.put('/:id', function (req, res) {
  let sqlKey = `update member set 
  memberName='${req.body.memberName}' ,
   memberNickName='${req.body.memberNickname}',
    memberBirth='${req.body.memberBirth}',
    memberGender='${req.body.memberGender}',
    memberEmail='${req.body.memberEmail}',
    memberPhone='${req.body.memberPhone}',
    memberTelephone='${req.body.memberTelephone}',
    memberAddress='${req.body.memberAddress}' 
    where id='${req.body.id}'`
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log('/:id', obj)

  conn.query(
    sqlKey,
    [
      req.body.id,
      req.body.memberEmail,
      req.body.memberNickname,
      req.body.memberBirth,
      req.body.memberGender,
      req.body.memberEmail,
      req.body.memberPhone,
      req.body.memberTelephone,
      req.body.memberAddress,
    ],
    function (err, rows) {
      if (err) {
        console.log(JSON.stringify(err))
      }
      res.send(JSON.stringify(req.body))
    }
  )
})
module.exports = router
