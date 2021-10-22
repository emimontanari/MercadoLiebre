const express = require("express")
const app = express()
const path = require("path");
app.use("/public",express.static("public"));


const HOME_PAGE = "/views/index.html"
const REGISTRER_PAGE = "/views/formulario.html"
const LOGIN_PAGE = "/views/login.html"


app.listen(5050, () => console.log("Servidor corriendo en el puerto 5050"))

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