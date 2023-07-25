//<----------------jwt--------------->
const jwt = require("jsonwebtoken")
//<----------------dotenv--------------->
require("dotenv").config()


//<----------------Authenticating User--------------->
const authentication = (req,res,next)=>{
    //<------requesting token from cookies------>
    const token = req.cookies.token
    //<-------when token is Unavailable-------->
    if(!token){
        res.status(401).json("login first")
        //<-------when token is Available----->
        }else{
        try {
            //<------JWT verification----->
            const decode = jwt.verify(token,process.env.key)
            if(decode){
             const user_ID = decode.userID
                 req.body.userID = user_ID;
              next()
             }else{
                res.status(401).json("plz login")
             }
        } catch (error) {
            res.status(500).json({"err":error.message})
        }
    }
        
    }



//<----------------exporting Authentication--------------->
module.exports = {authentication}