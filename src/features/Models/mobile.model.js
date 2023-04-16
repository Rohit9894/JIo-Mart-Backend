const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
  img: String,
  title: String,
  price: Number,
});
const mobiles = mongoose.model("mobile", mobileSchema);
module.exports = mobiles;
