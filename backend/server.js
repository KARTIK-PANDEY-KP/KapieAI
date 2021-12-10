const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors");
const fs  = require("fs");

const app = express()
app.use(cors())

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/', (req, res) => {
    console.log(req.body)
        var name = req.body.name;
        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

   
    fs.appendFileSync("query.txt","name = " + name + "\n");
    fs.appendFileSync("query.txt","email = " + email + "\n");
    fs.appendFileSync("query.txt","subject = " + subject + "\n");
    fs.appendFileSync("query.txt","message = " + message + "\n");
    fs.appendFileSync("query.txt","--------------\n")
    

    res.status(200).json({
        success : true
    })
})

app.listen(8000, ()=>console.log("Server is listening on http://localhost:8000"))

//start krne ke liye
//terminal me project ke backend/ folder me jana
//npm run start type krna