const mongoose = require("mongoose");

const MakeupSchema = new mongoose.Schema({
  img: String,
  title: String,
  price: Number,
});
const Makeups = mongoose.model("Makeup", MakeupSchema);
module.exports = Makeups;
