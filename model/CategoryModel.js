//<----------------mongoose--------------->
const mongoose = require("mongoose")

//<----------------creating categorySchema--------------->
const categorySchema = mongoose.Schema({
    name : { type:String,required:true,unique:true }
},{
    versionKey : false
})

//<----------------creating CategoryModel--------------->
const CategoryModel = mongoose.model("category",categorySchema)


module.exports = { CategoryModel }