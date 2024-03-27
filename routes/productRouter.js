const productsRouter = require("express").Router();
const {
  getProductsByLabel,
  getProductsByLabelId,
  getProductById,
} = require("../controller/products");

const allLables = {
  trending: true,
  arriving: true,
  popular: true,
  offers: true,
  deals: true,
  featured: true,
  accessories: true,
  clearance: true,
};

productsRouter.param("label", async (req, res, next, label) => {
  if (label in allLables) {
    req.label = label;
    next();
  } else {
    return res.status(404).send("Label does not exists!");
  }
});

productsRouter.param("labelId", async (req, res, next, labelId) => {
  if (!labelId) {
    return res.status(404).send("Label Id not provided!");
  }

  req.labelId = labelId;
  next();
});

productsRouter.param("id", async (req, res, next, id) => {
  const product_id = Number(id);

  try {
    const product = await getProductById(product_id);

    if (product === null) {
      return res.status(404).send({ message: "Product does not exist" });
    }

    req.product = product;
  } catch (error) {
    return res.status(500).send("Error getting product by id");
  }

  next();
});

productsRouter.get("/product/:id", async (req, res) => {
  return res.status(200).send({ product: req.product });
});

productsRouter.get("/category/:label", async (req, res) => {
  try {
    const products = await getProductsByLabel(req.label);
    return res.status(200).send({ products: products });
  } catch (error) {
    return res.send(500).status("Internal status error here!");
  }
});

productsRouter.get("/category/:label/:labelId", async (req, res) => {
  try {
    const products = await getProductsByLabelId(req.label, req.labelId);
    return res.status(200).send({ products: products });
  } catch (error) {
    return res.send(500).status("Internal status error here!");
  }
});

//better error handling

module.exports = productsRouter;
