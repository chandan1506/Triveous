//<----------------creating cartRouter--------------->
const express = require("express");
const cartRouter = express.Router();

//<----------------importing--------------->
const { addToCart, getCart, updateCartQuantity, deleteCartItem } = require("../controller/cart.controller")
const {authentication} = require("../middleware/authentication")
cartRouter.use(authentication)
                       // <-----to add product to cart----->
cartRouter.post("/add",addToCart)

                      // <-----to get all cart----->
cartRouter.get("/getAll/:userID",getCart)

                      // <-----to update cart item----->
cartRouter.patch("/:productId",updateCartQuantity)

                    // <-----to remove item from cart----->
cartRouter.delete("/delete/:productId",deleteCartItem)



//<----------------exporting cartRouter--------------->
module.exports = {cartRouter}