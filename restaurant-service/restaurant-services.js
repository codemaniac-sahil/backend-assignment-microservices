const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Restaurant = require("./models/Restaurant");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));

app.put("/restaurants/:restaurantId/menu", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  const { items } = req.body;

  const restaurant = await Restaurant.findById(restaurantId);
  if (restaurant) {
    restaurant.menu = items;
    await restaurant.save();
    res.json(restaurant);
  } else {
    res.status(404).json({ error: "Restaurant not found" });
  }
});

app.put("/restaurants/:restaurantId/status", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  const { online } = req.body;

  const restaurant = await Restaurant.findById(restaurantId);
  if (restaurant) {
    restaurant.online = online;
    await restaurant.save();
    res.json(restaurant);
  } else {
    res.status(404).json({ error: "Restaurant not found" });
  }
});

app.listen(3001, () => {
  console.log("Delivery Service is running on port 3001");
});
