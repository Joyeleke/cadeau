const { productExistsInCart } = require("../controller/cart");
const { getProductById } = require("../controller/products");

const verifyNewCartItemRequest = async (req, res, next) => {
  const product_id = Number(req.body.product_id);
  const quantity = Number(req.body.quantity);

  if (!product_id || !quantity) {
    return res.status(400).send("Missing payload in request!");
  }

  try {
    const product = await getProductById(product_id);

    if (product === null) {
      return res.status(404).send({ message: "Product does not exist!" });
    }

    const productExists = await productExistsInCart(
      req.user.cart_id,
      product_id
    );

    if (productExists === true) {
      return res
        .status(409)
        .send({ message: "Product already exists in cart" });
    }

    req.product = { product_id, quantity };
    next();
  } catch (error) {
    console.log("Error here", error.message);
    return res.status(500).send("Error verifying your cart request!");
  }
};

module.exports = verifyNewCartItemRequest;
