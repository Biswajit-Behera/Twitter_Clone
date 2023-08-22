const express = require('express');
const app = express();
const port = 3003;
const middleware= require('./middleware') // create the location 
const path=require('path')
const bodyParser=require("body-parser")
const mongoose=require("./database");



const server= app.listen(port,()=>console.log("Server Listing as a port"+port));

// here we use the module/ files
app.set('view engine',"pug");
app.set("views","views");

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"Public")))


//Routes
const loginRoutes = require('./routes/LoginRoutes')
const registerRoutes = require('./routes/registerRoutes')


app.use("/login",loginRoutes);
app.use("/register",registerRoutes);

app.get("/",middleware.requireLogin,(req,res,next)=>{ // acess /-> root of our site// here middleware to implement its application 
    //payload:- sending data to certain pages
    var payload= {
        pageTitle:"Home" //this used to rende that page
        // here we render from app.js to render the title(pass data from server)
    }
    res.status(200).render("Home",payload);// 2 parameters object  to render

})

// Mongoose Installed its an library 
