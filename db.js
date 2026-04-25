const mongoose = require("mongoose");
require("dotenv").config();


async function RunDb(){

    mongoose.connect(process.env.CONNSTRING)
    .then(() => console.log("Connected with Mongoose"))
    .catch(err => console.error(err));
    
}

RunDb();


module.exports = {RunDb};