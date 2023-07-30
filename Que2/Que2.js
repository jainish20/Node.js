const express = require("express")
const app = express()
const fs = require("fs")

app.get("/",(req,res)=>{
    fs.readFile("./index2_1.html","utf8",(err,data)=>{
        res.send(data)
    })
})
app.get("/gethello",(req,res)=>{
    fs.readFile("./index2.html","utf8",(err,data)=>{
        res.send(data)
    })
    // res.send(`<h1>hello nodeJs!!!</h1>`)
})

app.listen(3000)



