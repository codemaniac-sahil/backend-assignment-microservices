// delivery-service.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Order = require("./models/Order");

const app = express();
app.use(bodyParser.json());
require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));

// Endpoint to update the status of pizza deliveries
app.put("/deliveries/update-status/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    orderId,
    { status },
    { new: true }
  );
  res.json(order);
});

app.listen(3002, () => {
  console.log("Delivery Service is running on port 3002");
});
