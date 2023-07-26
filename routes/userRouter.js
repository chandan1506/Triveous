//<----------------creating userRouter--------------->
const express = require("express");
const userRouter = express.Router();

//<----------------importing register,login controller--------------->
const {register,login} = require("../controller/user.controller")



              //<----------------to register user--------------->
userRouter.post("/register",register)

               //<----------------to login user--------------->
userRouter.post("/login",login)  


//<----------------exporting userRouter--------------->
module.exports = {userRouter}