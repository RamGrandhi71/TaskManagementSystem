require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("test");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to db");

    app.listen(process.env.PORT, ()=> {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((e) => {
    console.log(e);
})

