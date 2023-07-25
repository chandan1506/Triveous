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
app.use("/user",userRouter)
const {categoryRouter} = require("./routes/categoryRouter")
app.use("/category",categoryRouter)
const {productRouter} = require("./routes/productRouter")
app.use("/product",productRouter)
const {cartRouter} = require("./routes/cartRouter")
app.use("/cart",cartRouter)
const {orderRouter} = require("./routes/orderRouter")
app.use("/order",orderRouter)

//<-------------Base API------------->
app.get("/",(req,res)=>{
     res.json("Welcome To Base API")
})


//<-------------establishing server------------->
app.listen(Port,async ()=>{
     try {
         await connection
         console.log("DB is connected")
     } catch (error) {
          console.log({"err":error.message})
     }
      console.log(`server is running on port ${Port}`)
})