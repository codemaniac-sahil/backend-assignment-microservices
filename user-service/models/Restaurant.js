const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  online: Boolean,
  menu: [{ itemName: String, price: Number }],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
