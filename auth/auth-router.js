// const router = require('express').Router();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const secrets = require("../config/secrets.js");
const Users = require("../users/users-model.js");

// router.post('/register', (req, res) => {
  // implement registration

router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12); // hash the password
    user.password = hash; // reset password as hashed password

    Users.addUser(user)
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to add that user."
        });
      });
  } else {
    res.status(400).json({ message: "Please enter a username and password." });
  }
});



router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
