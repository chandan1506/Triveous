//<----------------mongoose--------------->
const mongoose = require("mongoose")

//<----------------creating UserSchema--------------->
const userSchema = mongoose.Schema({
    name : { type: String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true },
    city : { type: String, required: true }
},{
    versionKey:false
})

//<----------------creating UserModel-------------->
const UserModel = mongoose.model("user",userSchema)


//<----------------exporting UserModel--------------->
module.exports = { UserModel }