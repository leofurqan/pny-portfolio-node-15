const express = require("express");
const bcrypt = require("bcrypt");
const joi = require("joi");
const router = express.Router();

//Models
const User = require("../models/UserModel");

//Validations
const addUserValidation = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  phone: joi.string().max(11).min(11).required(),
});

const loginUserValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

router.post("/addUser", async (req, res) => {
  try {
    await addUserValidation.validateAsync(req.body);
    const user = new User(req.body);
    await user.save();
    res.send("User added successfully...");
  } catch (error) {
    res.send(`Error adding user: ${error}`);
  }
});

router.post("/login", async (req, res) => {
  try {
    await loginUserValidation.validateAsync(req.body);
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      await bcrypt.compare(req.body.password, user.password).then(function (result) {
        if (result) {
          res.send({
            message: "Login Successfull!!",
            user: user,
          });
        } else {
          res.send("Wrong Credentials!!");
        }
      });
    } else {
      res.send("Invalid Credentials!!");
    }
  } catch (error) {
    res.send(`Error logging in user: ${error}`);
  }
});

module.exports = router;
