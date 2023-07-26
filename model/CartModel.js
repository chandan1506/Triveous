// <-----------mongoose--------->
const mongoose = require("mongoose")

// <-----------cartSchema--------->
const cartSchema = mongoose.Schema({
    userID : { type:"ObjectId", ref:"user", require:true },
    items : [
        {
            productId : {
                type : "ObjectId",
                ref : "product",
                require : true 
            },
            quantity : {
                type : Number,
                default : 1,
                required : true
                
            },
            price : {
                type : Number,
                required : true
            }
        
        }
    ]
},{
    versionKey : false
})

// <-----------cartModel--------->
const CartModel = mongoose.model("cart",cartSchema)


// <-----------export--------->
module.exports = { CartModel }