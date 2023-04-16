const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  img: String,
  qty: Number,
  title: String,
  price: Number,
  strikedprice: Number,
  userid: String,
});
const cartData = mongoose.model("cart", cartSchema);
module.exports = cartData;
