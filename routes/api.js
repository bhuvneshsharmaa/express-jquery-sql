const express=require("express")
const route=express.Router()


const db=require('./../db')
route.get('/',(req,res)=>{
    db.getAllPersons()
        .then((persons)=>{
            res.send(persons)
        })
        .catch((err)=>res.send(err))
})
route.post('/add',(req,res)=>{
    db.addPerson(req.body.name,req.body.age,req.body.city)
        .then(()=>res.redirect('/api'))
        .catch((err)=>res.send(err))
})

exports=module.exports=route