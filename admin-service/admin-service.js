const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");

const app = express();
app.use(bodyParser.json());

require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err));

// Endpoint to add a new restaurant
app.post("/admin/add-restaurant", async (req, res) => {
  const restaurantData = req.body;
  const restaurant = await Restaurant.create(restaurantData);
  res.json(restaurant);
});

// Endpoint to remove a restaurant
app.delete("/admin/remove-restaurant/:restaurantId", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  await Restaurant.findByIdAndRemove(restaurantId);
  res.json({ message: "Restaurant removed successfully" });
});

app.listen(3003, () => {
  console.log("Admin Service is running on port 3003");
});
