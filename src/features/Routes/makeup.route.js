const express = require("express");
const MakeupData = require("../Models/makeup.model");
const MakeupRouter = express.Router();

MakeupRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new MakeupRouter(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
MakeupRouter.get("/", async (req, res) => {
  let data = await MakeupData.find({});
  res.send(data);
});

module.exports = MakeupRouter;
