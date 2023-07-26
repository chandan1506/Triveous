//<----------------creating orderRouter--------------->
const express = require("express");
const orderRouter = express.Router();

//<----------------importing controller & middleware--------------->
const { orderPlaced, orderHistory, orderDetails } = require("../controller/order.controller")
const { authentication } = require("../middleware/authentication")

orderRouter.use(authentication)

//<-------- for making new order request--------->
orderRouter.post("/add/:productId",orderPlaced)

//<-------- for getting all order--------->
orderRouter.get("/getAll",orderHistory)

//<-------- for getting order by id-------->
orderRouter.get("/:id",orderDetails)


//<----------------exporting orderRouter--------------->
module.exports = {orderRouter}