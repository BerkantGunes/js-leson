
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connect = async ()=> {
    try {
        await mongoose.connect('mongodb://localhost:27017/pos-app');
        console.log('mongoose connected!');
    }
    catch (error) {
        console.error("connection error:",error.message);
    }
}

connect();

app.get("/", (req,res)=> res.send("Hello World"))

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})
