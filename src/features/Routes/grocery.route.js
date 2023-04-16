const express = require("express");
const groceryData = require("../Models/grocery.model");
const groceryRouter = express.Router();

groceryRouter.post("/", async (req, res) => {
  try {
    const { body } = req;

    const postData = new groceryData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
groceryRouter.get("/:id", async (req, res) => {
  try {
    let data = await groceryData.findById(req.params.id);
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});
groceryRouter.get("/", async (req, res) => {
  const { limit = 12, page = 1, sort, order } = req.query;

  // if (sort != "" && order != "") {
  //   let value = order === "asc" ? 1 : order === "desc" ? -1 : 1;
  //   let data = await groceryData
  //     .find()
  //     .limit(limit)
  //     .skip((page - 1) * limit)
  //     .sort({ price: order });

  //   return res.send(data);
  // }
  let data = await groceryData
    .find()
    .limit(limit)
    .skip((page - 1) * limit);
  res.send(data);
});

module.exports = groceryRouter;
