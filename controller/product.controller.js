//<----------------importing ProductModel--------------->
const {ProductModel} = require("../model/ProductModel")

//<----------------to create product--------------->
const createProduct = async (req,res)=>{
    const payload = req.body
    try {
        const product = new ProductModel(payload)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to create product"})
    }
}

//<----------------to get product by categoryId--------------->
const getProductByCategoryId = async (req,res)=>{
    const id = req.params.id
    try {
        const product= await ProductModel.find({categoryId:id})
        res.status(201).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to fetch product"})
    }


}

//<----------------to get product by productId--------------->
const getProductByProductId = async (req,res)=>{
    const id = req.params.id
    try {
        const product= await ProductModel.find({_id:id})
        res.status(201).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to fetch product"})
    }
}

//<----------------exporting--------------->
module.exports = { createProduct, getProductByCategoryId, getProductByProductId }