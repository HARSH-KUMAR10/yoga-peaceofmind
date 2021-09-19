const express = require('express');
const app = express();
const PORT = process.env.PORT|8000;

app.use(express.static(__dirname+'/login'));
app.use(express.static(__dirname+'/instructor'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/login/login.html");
})

app.get('/instructor',(req,res)=>{
    res.sendFile(__dirname+'/instructor/index.html');
})

app.listen(PORT,()=>{
    console.log("listening on : http://localhost:"+PORT);
})