const path = require ('path')
const fs = require('fs')
const express = require ('express')
const jwt = require ('jsonwebtoken')

const app = express() //creating express server 

app.get('/api', (req,res)=>{
    res.json({
        message:"Welcome to JWT"
    })
})
app.listen (3333, ()=>{
console.log('server started')
})

app.post('/api/post', verifyToken, (req,res)=>{
    jwt.verify(req.token, "secretKey" , (err, data)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                message: "Post created", data
            })
        }
    })
})

//Authorization : Bearer <token>
function verifyToken(req,res,next){
    //get auth header 
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else 
    res.sendStatus(403)

    app.post('/api/login',(req,res)=>{
        const user = {
            id:1,
            uname:"Sagar",
            email: "yoyo@yoy.com"

        }

        jwt.sign({user}, 'secretKey', (err,token)=>{
            res.json({
                token
            })
        })
    })
}