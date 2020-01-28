const express=require('express')
const path=require('path')
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','hbs')
const db=require('./db')
const api=require('./routes/api')
app.use('/api',api)
app.get('/',(req,res)=>{
    db.getAllPersons()
        .then((persons)=>{
            res.render('persons',{persons})
        })
        .catch((err)=>{res.send(err)})
})
app.get('/add',(req,res)=>{
    res.render('add_person')
})
app.post('/add',(req,res)=>{
    db.addPerson(req.body.name,req.body.age,req.body.city)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
})
app.use('/public',express.static(path.join(__dirname,'public_static')))
app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})
