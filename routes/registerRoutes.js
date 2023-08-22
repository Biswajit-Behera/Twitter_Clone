const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../schema/UserSchema'); // Assuming this is the correct import for your UserSchema

app.set('view engine', "pug");
app.set("views", "views");

module.exports = User;


app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    res.status(200).render("register");
});

router.post("/", async (req, res, next) => {
    console.log(req.body);
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password.trim();

    var payload = req.body;

    if (firstName && lastName && username && email && password) {
        var user= await User.findOne({
            $or:[
                {username:username },
                {email:email }
            ]
        })
        .then((user)=>{
            console.log(user);

        })
        .catch((error)=>{
            console.log(error);
            payload.errorMessage="Something went wrong";
            res.status(200).render("register",payload);
        });
        if(user=null){
            //no user found

            var data = req.body;

            User.create(data)
            .then((user)=>{
                console.log(user);
    
            })
        }
       
        else{
            //user found
            if(email==user.email){
                payload.errorMessage="Email already in use";

            }
            else{
                payload.errorMessage="Username already in use";
            }
        }
        res.status(200).render("register",payload)
        
       
    }
    else{
        payload.errorMessage="Make Sure each field has a valid value";
        res.status(200).render("register",payload);
    }
    })

module.exports = router;
