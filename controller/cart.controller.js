// <-----------importing CartModel-------->
const { CartModel } = require("../model/CartModel")
const { ProductModel} = require("../model/ProductModel")

// <-----to add product to cart----->
const addToCart = async (req,res)=>{
    const { userID, productId, quantity } = req.body;
    try {
        

        // fetch the product
      const product = await ProductModel.findById(productId);
      console.log(product)
       const price = product.price;

        const cart = await CartModel.findOne({userID})
        if(cart){
             // If the cart exists, check if the product is already in the cart
             const existingCartItem = cart.items.find((item)=>item.productId == productId)
            if(existingCartItem){
                 // If the product exists in the cart, increase the quantity by 1
                 existingCartItem.quantity += 1;
            }else{
                // If the product is not in the cart, add it to the cart
            cart.items.push({ productId, quantity, price });
            }
            await cart.save();
          res.status(201).json(cart);
        }else{
             // Create a new cart if it doesn't exist
            const newCart = new CartModel({ userID, items: [{ productId, quantity, price }] });
            await newCart.save();
            res.status(201).json("product added to cart successfully");
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({"error":"failed to add to cart"})
    }
}

// <-----to get all cart----->
const getCart = async (req,res)=>{
    const userID = req.params.userID;
    try {
      const allData = await CartModel.find({ userID });
      res.status(200).json(allData);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ "error": "failed to fetchdata from cart" });
    }
  };
  

// <-----to update cart item----->
const updateCartQuantity = async (req,res)=>{
    const { userID,  quantity } = req.body;
    const {productId}= req.params

    try {
        let cart = await CartModel.findOne({ userID });
       
        if (!cart) {
            res.status(404).json({ message: "cart is not found" });
        }else{
        const update = cart.items.find((item) =>item.productId == productId );
        if (!update) {
            res.status(404).json({ error: "Item not found in the cart" });
        }else{
            update.quantity = quantity;
            await cart.save();
            res.json({ message: "Cart item is updated now" });
        }
      }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "failed to update quantity" });
}
}

// <-----to remove item from cart----->
const deleteCartItem = async (req,res)=>{
  const { userID } = req.body;
  const productId = req.params.productId;

  try {
    let cart = await CartModel.findOne({ userID });
    if (!cart) {
       res.status(404).json({ message: "Cart is not found" });
    }else{
    cart.items = cart.items.filter((ele) => {
      return ele.productId != productId;
    });
    await cart.save();
    res.json({ message: "cart item is deleted now" });
   }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "failed to remove data from cart" });
  }

}

// <-----export----->
module.exports = { addToCart, getCart, updateCartQuantity, deleteCartItem }