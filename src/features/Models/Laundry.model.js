const mongoose = require("mongoose");

const LaundrySchema = new mongoose.Schema({
  img: String,
  title: String,
  price: Number,
});
const Laundrys = mongoose.model("Laundry", LaundrySchema);
module.exports = Laundrys;
