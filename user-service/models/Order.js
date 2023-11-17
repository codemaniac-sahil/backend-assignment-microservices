const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  restaurantId: mongoose.Schema.Types.ObjectId,
  items: [{ itemName: String, price: Number }],
  status: String,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
