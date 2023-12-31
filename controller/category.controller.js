//<----------------importing CategoryModel--------------->
const {CategoryModel} = require("../model/CategoryModel")

//<---------------- to create Category--------------->
const createCategory = async (req,res)=>{
    const payload = req.body
    try {
        const category = new CategoryModel(payload)
        await category.save()
        res.status(201).json("category added successfully")
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to create category"})
    }
}

//<---------------- to get All Category--------------->
const getAllCategory = async (req,res)=>{
    try {
        const category = await CategoryModel.find()
        res.status(201).json(category)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to fetch category"})
    }
}

//<----------------exporting--------------->
module.exports = { createCategory, getAllCategory }