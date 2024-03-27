const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("../config/passport");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const JWT_SECRET = process.env.JWT_SECRET;

const { createUser, getUserByEmail } = require("../controller/user");
const { createUserCart } = require("../controller/cart");
const VerifyNewUserRequest = require("../middleware/verifyNewUserRequest");

authRouter.post(
  "/login",
  passport.authenticate("local", {
    session: false,
    failureRedirect: "loginFailure",
  }),
  async (req, res) => {
    try {
      const user = await getUserByEmail(req.body.email);

      if (user === null) {
        return res.status(404).send({ message: "User not found" });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).send({ token });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ message: "Error during user login" });
    }
  }
);

authRouter.get("/loginFailure", (req, res, next) => {
  res.status(403).send({ message: "Could not log user in!" });
});

authRouter.post("/register", VerifyNewUserRequest, async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await createUser(firstname, lastname, email, hashedPassword);
    await createUserCart(user.id);
    return res.status(200).send({ message: "success" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Error during user registration");
  }
});

module.exports = authRouter;
