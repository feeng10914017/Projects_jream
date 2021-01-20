// var createError = require('http-error')
var express = require('express')
// var path = require('path')
// var cookieParser = require('cookie-parser')
// var logger = require('morgan')
var cors = require('cors')
var app = express()

var loginRouter = require('./routes/login')

app.use(cors())

app.use('/login', loginRouter)

app.listen(5555, () =>
  console.log('API is running on http://localhost:5555/login')
)

module.exports = app
