const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim : true,

    },
    lastName:{
        type: String,
        require: true,
        trim: true
    },
    username:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    profilePic:{
        type: String,
        default: "/images/ProfilePic.png"
    }
});

var User = mongoose.model('User',userSchema);
module.exports = User;
