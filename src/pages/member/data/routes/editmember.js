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
