const express = require("express");
const app = express();
const PORT = 8000;
const userdata = require("./MOCK_DATA.json");
const fs = require("fs");
//-----------------------------------------------------------
const mongoose = require("mongoose");

//Must Req for req.body -----------------------------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//-----------------------------------------------------------

// Schema
const userSchema = new mongoose. Schema({
    firstName: {
    type: String,
    required: true,
    },
    lastName: {
        type: String,
    },
    
    email:{
        type: String,
        required: true,
        unique: true,  //***will check in DB if same entry exists******
    },
    jobTitle:{
        type: String,
        
    },
    gender:{
        type: String,
        
    }
});


//-----------------------------------------------------------

const User = mongoose.model("user", userSchema);

//-----------------------------------------------------------

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1"). 
then(() => console. log("MongoDB Connected"))
. catch((err) => console. log("Mongo Error", err));;

//-----------------------------------------------------------
app.get("/",(req,res)=>{
    res.send("home Page");
});
//-----------------------------------------------------------
   


//-----------------------------------------------------------
 
const MyApiFun=()=>{
    app.listen(PORT,()=>{console.log(`Listening on PORT ${PORT}`)})
}

module.exports={
    MyApiFun
}    