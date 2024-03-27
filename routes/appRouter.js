const appRouter = require("express").Router();

const authRouter = require("./authRouter");
const productsRouter = require("./productRouter");
const cartRouter = require("./cartRouter");
const orderRouter = require("./orderRouter");
const checkoutRouter = require("./checkoutRouter");
const passport = require("../config/passport");
const authenticateUserRequest = require("../middleware/authenticateUserRequest");

appRouter.use("/products", productsRouter);
appRouter.use("/auth", authRouter);

//Protected Routes
appRouter.use(
  passport.authenticate("jwt", {
    session: false,
  }),
  authenticateUserRequest
);

appRouter.use("/cart", cartRouter);
appRouter.use("/checkout", checkoutRouter);
appRouter.use("/orders", orderRouter);

//send back 404 message to client

module.exports = appRouter;
