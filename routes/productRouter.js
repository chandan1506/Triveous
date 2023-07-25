//<----------------creating productRouter--------------->
const express = require("express");
const productRouter = express.Router();

//<----------------importing product.contoller--------------->
const { createProduct, getProductByCategoryId, getProductByProductId } = require("../controller/product.controller")

     //<----------------to create product----------->
productRouter.post("/create",createProduct)
     //<----------------to get product by categoryId------->
productRouter.get("/categoryId/:id",getProductByCategoryId)
    //<----------------to get product by productId--------->
productRouter.get("/productId/:id",getProductByProductId)



//<----------------exporting productRouter--------------->
module.exports = {productRouter}