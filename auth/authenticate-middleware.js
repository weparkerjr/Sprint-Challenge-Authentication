/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });

  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "That token isn't valid." });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token provided." });
  }
};