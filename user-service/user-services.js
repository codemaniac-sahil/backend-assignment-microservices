const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Order = require("./models/Order");
const Restaurant = require("./models/Restaurant");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));

// Endpoint to get online restaurants in a city
app.get("/users/restaurants/:city", async (req, res) => {
  const city = req.params.city;
  const restaurants = await Restaurant.find({ city, isOnline: true });
  res.json(restaurants);
});

// Endpoint to place a pizza order
app.post("/users/orders/place", async (req, res) => {
  const orderData = req.body;
  const order = await Order.create(orderData);
  res.json(order);
});

// Endpoint to get order history for a user
app.get("/users/orders/history/:userId", async (req, res) => {
  const userId = req.params.userId;
  const orders = await Order.find({ userId });
  res.json(orders);
});

app.listen(3000, () => {
  console.log("User Service is running on port 3000");
});
