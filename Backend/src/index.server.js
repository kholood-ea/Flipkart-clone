const express = require('express');
const env = require('dotenv')
const app=express();
const bodyParser=require('body-parser')
const mongoose = require ('mongoose')

// routes
const userRoutes=require('./routes/user')


// environment variables
env.config()


//middleware for parsing request body
// app.use(express.json())
 app.use(bodyParser())
 app.use('/api',userRoutes )


mongoose.connect(
    `${process.env.DBconnection}`, 
    {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true 
    }).then(()=>{console.log("Database connected")});


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})