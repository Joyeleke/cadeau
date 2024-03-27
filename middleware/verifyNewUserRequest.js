const { getUserByEmail } = require("../controller/user");

const verifyNewUserRequest = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).send("Missing field in payload!");
  }

  try {
    const user = await getUserByEmail(email);

    if (user !== null) {
      return res.status(409).send( {message: "User already exists"});
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error checking user existence");
  }

};

module.exports = verifyNewUserRequest;