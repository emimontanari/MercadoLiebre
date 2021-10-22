const express = require("express")
const app = express()
const path = require("path");
app.use("/public",express.static("public"));
const HOME_PAGE = "/views/index.html"
const REGISTRER_PAGE = "/views/formulario.html"
const LOGIN_PAGE = "/views/login.html"


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
     console.log("start server");});



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,HOME_PAGE));
});

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,HOME_PAGE));
});

app.get("/creatucuenta",(req,res)=>{
    res.sendFile(path.join(__dirname,REGISTRER_PAGE));
});

app.get("/ingresa",(req,res)=>{
    res.sendFile(path.join(__dirname,LOGIN_PAGE));
});

app.get("/views/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,HOME_PAGE));
});
app.get("/views/formulario.html",(req,res)=>{
    res.sendFile(path.join(__dirname,REGISTRER_PAGE));
});
app.get("/views/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,LOGIN_PAGE));
});

