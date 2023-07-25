//<-------------expresss--------------->
const express = require("express")
const app = express()
app.use(express.json())

//<-------------dotenv------------->
require('dotenv').config()
const Port = process.env.port

//<-------------connection------------>
const {connection} = require("./config/db")

//<-------------cookie-parser------------->
const cookieParser = require("cookie-parser")
   app.use(cookieParser())

//<-------------routes------------->
const {userRouter} = require("./routes/userRouter")
app.use("/",userRouter)


//<-------------establishing server------------->
app.listen(Port,async (req,res)=>{
     try {
         await connection
         console.log("DB is connected")
     } catch (error) {
          console.log({"err":error.message})
     }
      console.log(`server is running on port ${Port}`)
})