const express = require("express");

const UserSchema = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    let oldUser = await UserSchema.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "already" });
    }
    bcrypt.hash(password, 4, async function (err, hash) {
      const user = new UserSchema({ username, email, password: hash });
      await user.save();
      res.send({ msg: "success", user });
    });
  } catch (e) {
    res.send(e.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserSchema.findOne({ email });
    if (user) {
      let hashed_password = user.password;
      bcrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user._id }, "hush");
          res.send({ msg: "success", token: token, user });
        } else {
          res.send({ msg: "incorrect password" });
        }
      });
    } else {
      res.send({ msg: "email not resgisterd" });
    }
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = userRouter;
