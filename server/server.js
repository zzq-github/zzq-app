const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const userApi = require('./api/userApi')
// 支持跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/user', userApi)

app.listen(3000)

console.log('server in running,listen at port 3000...')
