const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  img: String,
  title: String,
  price: Number,
});
const groceries = mongoose.model("grocery", grocerySchema);
module.exports = groceries;
