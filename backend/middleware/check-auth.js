const { request } = require("http");

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "gN159XbDD34D62i6Fx84uPOeqil7Tm");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed!" });
  }
};
