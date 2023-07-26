// <-----------imporing ordermodel----->
const { OrderModel} = require("../model/OrderModel")

// <-----------importing cartmodel----->
const { CartModel } = require("../model/CartModel");


// <-----------to order place----->
const orderPlaced = async (req, res) => {
  const { userID } = req.body;
   const { productId} = req.params
  try {
    // checking cart is present or not
    let cart = await CartModel.findOne({ userID });
    if (!cart) {
      return res.status(404).json({ message: "Cart is not found" });
    }

    // finding total price of items
    let totalPrice = 0;
    for (let item of cart.items) {
      if (!item.price || isNaN(item.price)) {
        // checking here if the product price is missing or not a number
        return res.status(400).json({ message: "price is invalid" });
      }
      totalPrice += item.quantity * item.price;
    }

    // creating new order
    const order = new OrderModel({ userID, items: cart.items, totalPrice });
    await order.save();

    // after successfull order items should be removed from cart
    cart.items = cart.items.filter((ele) => {
      return ele.productId != productId;
    });

    await cart.save();
    res.status(201).json({ message: "order is placed now" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to order" });
  }
};

//<----to get order history---->
const orderHistory = async (req,res)=>{
    try {
        const order= await OrderModel.find()
        res.status(201).json(order)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to fetch order"})
    }
}

//<----to get order details---->
const orderDetails = async (req,res)=>{
    const id = req.params.id
    try {
        const order= await OrderModel.find({_id:id})
        res.status(201).json(order)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"error":"failed to fetch order details"})
    }
}




// <-----------export----->
module.exports = { orderPlaced, orderHistory, orderDetails  };
