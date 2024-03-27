const { getAllProductsFromCart } = require("../controller/cart");

const verifyPlaceOrderRequest = async (req, res, next) => {
  try {
    const cartItems = await getAllProductsFromCart(req.user.cart_id);

    if (cartItems.length === 0) {
      return res.status(400).send("Empty Cart!");
    }

    const stripeOrderItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: "usd",
          unit_amount: item.price,
          product_data: {
            name: item.name,
          },
        },
        quantity: item.quantity,
      };
    });

    req.orderItems = stripeOrderItems;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error checking if cart is empty");
  }
};

module.exports = verifyPlaceOrderRequest;
