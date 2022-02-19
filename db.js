require('dotenv').config()
const mysql = require('mysql')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'juchan'
const password = process.env.DB_PASSWORD || 'juchan'
const database = process.env.DB_DATABASE || 'homepage'

const config = {
    host:host,
    user:user,
    password:password,
    database:database    
}

const pool = mysql.createPool(config)

pool.getConnection((err,conn)=>{ // error가 뜰 경우, conn이 됐을 경우
    // 2의 매개변수 존재
    // 1. sql구문  2.()=>{}(콜백)
    conn.query('select * from group3',(error,result)=>{
        console.log(result) // error가 뜨면 그에 값, 성공하면 결과 값 뜰수있도록
    })
})


// const getConnection = (cb) => {
//     pool.getConnection((err,conn)=>{
//         cb(conn)
//     })
// }

// getConnection(conn =>{
//     conn.query('select * from group3',(error,result)=>{
//          console.log(result)
//     })
// })

module.exports = pool