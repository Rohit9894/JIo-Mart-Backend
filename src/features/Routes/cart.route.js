const express = require("express");
const cartData = require("../Models/cart.model");
const { findByIdAndDelete } = require("../Models/user.model");
const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const postData = new cartData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
cartRouter.get("/", async (req, res) => {
  try {
    let data = await cartData.find({});
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});
cartRouter.patch("/:id", async (req, res) => {
  try {
    const { body } = req;
    const id = req.params.id;

    let data = await cartData.findByIdAndUpdate(id, body, { new: true });

    return res.send("updated");
  } catch (e) {
    res.send(e.message);
  }
});
cartRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let data = await cartData.findByIdAndDelete(id);

    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});
cartRouter.delete("/all/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let data = await cartData.deleteMany({ userid: id });

    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = cartRouter;
