const express = require('express');
const app = express();
const PORT = process.env.PORT|8000;

app.use(express.static(__dirname+'/login'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/login/login.html");
})

app.listen(PORT,()=>{
    console.log("listening on : http://localhost:"+PORT);
})