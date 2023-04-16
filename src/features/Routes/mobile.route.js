const express = require("express");
const mobileData = require("../Models/mobile.model");
const mobileRouter = express.Router();

mobileRouter.post("/", async (req, res) => {
  try {
    const { body } = req;

    const postData = new mobileData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
mobileRouter.get("/:id", async (req, res) => {
  try {
    let data = await mobileData.findById(req.params.id);
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});
mobileRouter.get("/", async (req, res) => {
  const { limit = 12, page = 1, sort, order } = req.query;

  // if (sort != "" && order != "") {
  //   let value = order === "asc" ? 1 : order === "desc" ? -1 : 1;
  //   let data = await mobileData
  //     .find()
  //     .limit(limit)
  //     .skip((page - 1) * limit)
  //     .sort({ price: order });

  //   return res.send(data);
  // }
  let data = await mobileData
    .find()
    .limit(limit)
    .skip((page - 1) * limit);
  res.send(data);
});

module.exports = mobileRouter;
