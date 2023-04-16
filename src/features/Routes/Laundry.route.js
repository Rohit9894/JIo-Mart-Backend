const express = require("express");
const LaundryData = require("../Models/Laundry.model");
const LaundryRouter = express.Router();

LaundryRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new LaundryRouter(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
LaundryRouter.get("/", async (req, res) => {
  let data = await LaundryData.find({});
  res.send(data);
});

module.exports = LaundryRouter;
