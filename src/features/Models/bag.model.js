const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  img: String,
  title: String,
  price: Number,
});
const bags = mongoose.model("bag", bagSchema);
module.exports = bags;
