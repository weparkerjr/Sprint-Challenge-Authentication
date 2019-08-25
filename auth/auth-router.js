// const router = require('express').Router();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const secrets = require("../config/secrets.js");
const Users = require("../queries/jokes-queries.js");

// router.post('/register', (req, res) => {
  // implement registration

  // REGISTER
router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 14); // hash the password
    user.password = hash; // reset password as hashed password

    Users.addUser(user)
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to add user."
        });
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});



// router.post('/login', (req, res) => {
  // implement login

// LOGIN
  router.post("/login", (req, res) => {
    if (req.body.username && req.body.password) {
      let { username, password } = req.body;
      Users.findBy({ username })
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = createToken(user);
            res.status(200).json({ message: `Welcome, ${user.username}`, token });
          } else {
            res.status(401).json({ message: "Invalid Credentials." });
          }
        });
    } else {
      res.status(500).json({ message: "Please enter a username and password." });
    }
});


// CREATE TOKEN FUNCTION
function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;
