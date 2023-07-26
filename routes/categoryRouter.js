//<----------------creating categoryRouter--------------->
const express = require("express");
const categoryRouter = express.Router();

//<----------------importing category.controller--------------->
const {createCategory, getAllCategory} = require("../controller/category.controller")


                   //<---------------- to create Category--------------->
categoryRouter.post("/create",createCategory)

                //<----------------to get all category--------------->
categoryRouter.get("/getAll",getAllCategory)



//<----------------exporting categoryRouter--------------->
module.exports = {categoryRouter}