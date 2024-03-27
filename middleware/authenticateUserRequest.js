const authenticateUserRequest = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = authenticateUserRequest;
