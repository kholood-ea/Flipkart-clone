const express = require('express');
const env = require('dotenv')
const app=express();
const bodyParser=require('body-parser')
const mongoose = require ('mongoose')

// routes
const adminRoutes=require('./routes/admin/auth')
const authRoutes=require('./routes/auth')


// environment variables
env.config()


//middleware for parsing request body
// app.use(express.json())
 app.use(bodyParser())
 app.use('/api',authRoutes )
 app.use('/api',adminRoutes )


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