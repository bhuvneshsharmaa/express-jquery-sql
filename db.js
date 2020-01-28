const mysql =require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'bhuvi',
    database:'mydb',
    password:'mine@bhuvi123'
})
function getAllPersons(){
    return new Promise((resolve,reject)=>{
        connection.query(`select * from persons`,
        function(err,rows,cols){
            if(err)
            reject(err)
            else
            resolve(rows)
        })
    })
}
function addPerson(name,age,city){
    return new Promise((resolve,reject)=>{
        connection.query(`insert into persons (name,age,city) values (?,?,?)`,
        [name,age,city]),function(err,rows){
            if(err){
                reject(err)
            }else
            resolve()
        }
    })
}
exports=module.exports={getAllPersons,addPerson
}