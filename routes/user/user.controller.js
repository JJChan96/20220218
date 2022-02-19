// 미들웨어만 모아놓는 친구이다.
const pool = require('../../db')


const join = (req,res)=>{
    pool.getConnection((err,conn)=>{ // error가 뜰 경우, conn이 됐을 경우
        // 2의 매개변수 존재
        // 1. sql구문  2.()=>{}(콜백)
        conn.query('select * from group3',(error,result)=>{
            console.log(result) // error가 뜨면 그에 값, 성공하면 결과 값 뜰수있도록
        })
    })
    res.render('user/join')
}


module.exports = {
    join:join,
}