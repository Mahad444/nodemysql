const mysql = require ("mysql")
const express = require ('express')
// Connection of the DB
var data = mysql.createConnection({

    host :"localhost",
    user :"root",
    password :"root"
    
})

// Connction
data.query(()=>{
    console.log("MySQL database Connected")
});

const app = express();

app.listen(8000,()=>{
    console.log("now listening to port http://localhost:8000")
})

let sql = 'CREATE DATABASE shopsql'

app.get('/mydb',(req,res)=>{
    data.query(sql,(result,err)=>{
        if (err) throw err;
        console.log(result)
        res.send("Created shop database in mysql")
    })
})

