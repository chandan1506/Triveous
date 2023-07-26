// <-----------mongoose--------->
const mongoose = require("mongoose")

// <-----------orderSchema--------->
const orderSchema = mongoose.Schema({
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
                
            }       
        }
    ],
        totalPrice : {
            type : Number
        },
        date : {
            type : Date,
            default : Date.now()
        }
},{
    versionKey : false
})

// <-----------orderModel--------->
const OrderModel = mongoose.model("order",orderSchema)


// <-----------export--------->
module.exports = { OrderModel }