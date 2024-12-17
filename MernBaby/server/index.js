const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send({hi:'Hello'})
})

const PORT = process.env.PORT || 5001;

app.listen(5001,()=>{
    console.log("Listening on port 5001")
})  

