const express = require("express");
const bagData = require("../Models/bag.model");
const bagRouter = express.Router();

bagRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new bagRouter(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
bagRouter.get("/", async (req, res) => {
  let data = await bagData.find({});
  res.send(data);
});

module.exports = bagRouter;
