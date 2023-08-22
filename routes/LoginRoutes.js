const express = require('express');
const app = express();
const router = express.Router(); // express js file


app.set('view engine',"pug");
app.set("views","views");


router.get("/",(req,res,next)=>{ 

    res.status(200).render("login");
})

module.exports= router; // here we create the module and export this in name of "router"
