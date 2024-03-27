const orderRouter = require("express").Router();
const verifyPlaceOrderRequest = require("../middleware/verifyPlaceOrderRequest");
const {
  placeOrder,
  getAllOrders,
  deleteAllOrders,
} = require("../controller/order");

orderRouter.get("/", async (req, res) => {
  const user_id = req.user.user_id;

  try {
    const allOrders = await getAllOrders(user_id);
    return res.status(200).send({ items: allOrders });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error getting all orders");
  }
});

orderRouter.delete("/", async (req, res) => {
  const user_id = req.user.user_id;

  try {
    await deleteAllOrders(user_id);
    res.status(200).send({ message: "Order history has been cleared!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error clearing user order history");
  }
});

module.exports = orderRouter;
