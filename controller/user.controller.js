//<----------------bcrypt--------------->
const bcrypt = require("bcrypt");
//<----------------JWT--------------->
const jwt = require('jsonwebtoken');
//<----------------dotenv--------------->
require('dotenv').config()
//<----------------importing UserModel--------------->
const {UserModel} = require("../model/UserModel");



              //<----------------to register user--------------->
const register =  async (req, res) => {
    const {name,email,password,city} = req.body;
    const data = await UserModel.findOne({email})
    if(data){
        res.status(200).json({"message":"User is already Registered"})
    }else{
      try {
        bcrypt.hash(password, 5, async(err, hash) => {
          // Store hash in your password DB.
          if(err){
              res.status(400).json(err)   
          }
          else{
            const new_user = new UserModel({
              name,
              email,
              password: hash,
              city
            });
           await new_user.save();
            res.status(201).json({"message":"User is Registered"});
          }
         
        });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({"message":"Something went wrong please try again"});
      }
    }
  };

  
   //<----------------to login user--------------->
  const login =  async (req, res) => {
    const { email, password } = req.body;
    // console.log(email)
    try {
      const user = await UserModel.find({ email });
      // console.log(user)
      if (user.length > 0) {
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (result) {
            const token=jwt.sign({userID:user[0]._id}, process.env.key)
            res.cookie("token",token)
            res.status(200).json({"message":"login successfull"})
          } else {
            res.status(400).json({"message":"wrong Credentials"});
          }
        });
      } else {
        res.status(401).json({"message":"cannot login"});
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


  //<----------------exporting register,login controller--------------->
module.exports = {register,login}  