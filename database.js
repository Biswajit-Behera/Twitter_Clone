const mongoose = require("mongoose");
// mongoose.set('userNewUrlParser',true);
// mongoose.set('userUnifiedTopology',true);
// mongoose.set('useFindAndModify',false);
// mongoose.set('useUniFindAndTopology',false);


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        // Database connection
        mongoose.connect("mongodb+srv://BiswajitBehera:MongoDb123@twitterclone.3fvrqf0.mongodb.net/?retryWrites=true&w=majority")
            .then(() => {
                console.log("Connected to MongoDB Successfully");
            })
            .catch((err) => {
                console.log("Error not able to connect MongoDB" + err);
            });
    }
}

module.exports = new Database();
