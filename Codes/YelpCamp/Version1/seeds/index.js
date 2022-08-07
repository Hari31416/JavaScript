const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Campground = require("../models/campground");
const cities = require("./cities.js");
const { descriptors, places } = require("./seedHelpers.js");
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to mongoose!");
});

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const campground = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await campground.save();
  }
  console.log("Seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
