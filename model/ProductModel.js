//<----------------mongoose--------------->
const mongoose = require("mongoose")

//<----------------creating productSchema--------------->
const productSchema = mongoose.Schema({
    title : { type:String, required:true },
    price : { type:Number, required:true },
    description : { type:String, required:true },
    availability : { type:Boolean, required:true },
    categoryId : { type:"ObjectId", ref:"category" ,required:true },

},{
    versionKey : false
})

//<----------------creating ProductModel--------------->
const ProductModel = mongoose.model("product",productSchema)

//<----------------exporting ProductModel--------------->
module.exports = { ProductModel }

