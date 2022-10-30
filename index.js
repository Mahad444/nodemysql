const express = require ("express")
const mysql = require ("mysql")

// Connection of the DB
const db = mysql.createConnection({

    host :"127.0.0.1",
    user :"root",
    password :"root",
    port:'3306',

})

// Connction
db.connect((err)=>{
    if(err) throw err;
    console.log("MySQL database Connected")
});


const app = express();

app.get('/mydb' ,(req,res)=>{
    db.query("CREATE DATABASE nodemysql",(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send("Connected db")
    })
})

app.listen(8000,() =>{
    console.log("App Listening to http://localhost:8000")
})



module.exports = db;

