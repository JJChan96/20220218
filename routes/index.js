const express = require('express')
const router = express.Router()
const userRouter = require('./user/index')


router.get('/',(req,res)=>{
    res.render('index')
})

router.use('/user',userRouter)


module.exports = router