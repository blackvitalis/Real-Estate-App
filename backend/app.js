const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
port = process.env.PORT || 3000

mongoose.connect(process.env.DBURI).then(()=>{
  console.log(`Database connected successfully`);
}).catch((err)=>{
  console.error("Failed to connect to mongoDB",err.message)
})


app.listen(port,()=>{
console.log(`Server running on port ${port}❤️👌`);
})


