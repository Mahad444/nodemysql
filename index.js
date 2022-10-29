const express = require ("express")
const mysql = require ("mysql")

// Connection of the DB
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Qwerty123"
})

// Connction
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL database Connected")
})


const app = express();


app.listen(8000,() =>{
    console.log("App Listening to http://localhost:8000")
})

app.get('/createddb' ,(req,res)=>{
    let sql ="CREATE DATABASE nodemysql"
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        res.send("Connected db")
    })
})



