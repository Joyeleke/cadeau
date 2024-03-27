const checkoutRouter = require("express").Router();
const verifyPlaceOrderRequest = require("../middleware/verifyPlaceOrderRequest");
const {placeOrder} = require("../controller/order")
require("dotenv").config({ path: "../.env" });

const stripeKey = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeKey);
const YOUR_DOMAIN = "http://localhost:5173";

checkoutRouter.post("/create-checkout-session", verifyPlaceOrderRequest,  async (req, res) => {
  const orderItems = req.orderItems;

  if(orderItems.length === 0){
    return res.status(400).send("Empty Cart!");
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: orderItems,
    mode: "payment",
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({ clientSecret: session.client_secret });
});

checkoutRouter.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

checkoutRouter.post("/placeOrder", async (req, res) => {
  const cart_id = req.user.cart_id;
  const user_id = req.user.user_id;

  try {
    await placeOrder(cart_id, user_id);
    res.status(200).send({ message: "Order Placed!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error placing order");
  }
});

module.exports = checkoutRouter;
