const cartRouter = require("express").Router();
const verifyNewCartItemRequest = require("../middleware/verifyNewCartItemRequest");
const verifyUpdateCartItemRequest = require("../middleware/verifyUpdateCartItemRequest");
const verifyDeleteCartItemRequest = require("../middleware/verifyDeleteCartItemRequest")
const {
  addProductToCart,
  getAllProductsFromCart,
  updateProductInCart,
  deleteAllProductsFromCart,
  deleteProductFromCart
} = require("../controller/cart");

cartRouter.post("/cartitem", verifyNewCartItemRequest, async (req, res) => {
  const productToAdd = req.product;
  const cart_id = req.user.cart_id;

  try {
    await addProductToCart(
      cart_id,
      productToAdd.product_id,
      productToAdd.quantity
    );
    return res.status(200).send({ message: "Item Successfully Added" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error verifying your cart request!");
  }
});

cartRouter.get("/", async (req, res) => {
  const cart_id = req.user.cart_id;

  try {
    const allCartItems = await getAllProductsFromCart(cart_id);
    res.status(200).send({ items: allCartItems });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error getting items from cart!");
  }
});

cartRouter.put("/cartitem", verifyUpdateCartItemRequest, async (req, res) => {
  const productToAdd = req.product;

  try {
    await updateProductInCart(productToAdd.product_id, productToAdd.quantity);
    res.status(200).send("Item Successfully Updated");
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Error updating item in cart");
  }
});

cartRouter.delete(
  "/cartitem",
  verifyDeleteCartItemRequest,
  async (req, res) => {
    const productToDelete = req.product;
    const cart_id = req.user.cart_id;

    try {
      await deleteProductFromCart(cart_id, productToDelete.product_id);
      res.status(200).send("Item Successfully Deleted");
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Error deleting item from cart");
    }
  }
);

cartRouter.delete("/", async (req, res) => {
  const cart_id = req.user.cart_id;

  try {
    deleteAllProductsFromCart(cart_id);
    res.status(200).send("Cart has been cleared!");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error deleting all items from cart");
  }
});

module.exports = cartRouter;
