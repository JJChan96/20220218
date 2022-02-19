const express = require('express')
const router = express.Router()
const userController = require('./user.controller')

router.get('/join',userController.join)


// router.get('/join',(req,res)=>{
//     res.render('user/join')
// })

// 위에 방법 말고도 userController을 써서 미들웨어도 분리할 수 있다.

module.exports = router