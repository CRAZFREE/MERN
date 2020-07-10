require("dotenv").config();  //old way for calling a file

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const authRoutes=require("./routes/authentication");



//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
//DB connections 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("DB GOT Oopps!!!");
});


//Middlewaree
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// myfun.run().then().catch()
// In the above line then() is ued to run the run() when the condition is true and catch() is run when the condition is false

//My routes
app.use("/api",authRoutes);

//Port
const port = process.env.PORT || 8003;


//starting server
app.listen(port, () => {
    console.log(`app is lostening on port ${port}`);
}); 

