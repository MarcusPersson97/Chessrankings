const mongoose = require("mongoose");
require("dotenv").config();


async function RunDb() {
  try {
    await mongoose.connect(process.env.CONNSTRING);
    console.log("Connected with Mongoose");
  }
   catch (err) {
    console.error(err);
    throw err;
  }
}

async function CloseDb(){

    try{
        await mongoose.connection.close();
        console.log("Closed the Db connection");
    }

    catch (err){
        console.error(err);
        throw err;
    }

}

module.exports = {RunDb, CloseDb};