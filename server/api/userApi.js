let models = require('../db')
let express = require('express')

let router = express.Router()
let mysql = require('mysql')

// 数据库连接
let conn = mysql.createConnection(models.mysql)
conn.connect()

// 注册用户
router.post('/register', (req, res) => {
  let params = req.body
  // 查询注册用户是否存在
  let selectUser = `select 1 from user where phone=${params.phone} limit 1`
  let insertUser = `insert into user(userid,phone,password) value(0,?,?)`
  conn.query(selectUser, (error, result) => {
    if (error) {
      console.log(error)
      return false
    }
    if (result.length > 0) {
      res.json({status: 400, msg: '该手机号已经注册过了', data: ''})
    } else {
      conn.query(insertUser, [params.phone, params.password], (error, result) => {
        if (error) {
          console.log(error)
          return false
        }
        res.json({status: 200, msg: '注册成功', data: ''})
      })
    }
  })
})

// 用户登录
router.post('/login', (req, res) => {
  let params = req.body
  let selectPhone = `select * from user where phone=${params.phone}`
  conn.query(selectPhone, (error, result) => {
    if (error) {
      console.log(error)
      return false
    }
    if (result.length > 0) {
      let selectPassword = `select * from user where phone=? and password=?`
      conn.query(selectPassword, [params.phone, params.password], (error, result) => {
        if (error) {
          console.log(error)
          return false
        }
        if (result.length > 0) {
          res.json({status: 200, msg: '登录成功', data: result})
        } else {
          res.json({status: 400, msg: '密码错误,请重新输入', data: ''})
        }
      })
    } else {
      res.json({status: 400, msg: '该手机号不存在', data: ''})
    }
  })
})

module.exports = router
