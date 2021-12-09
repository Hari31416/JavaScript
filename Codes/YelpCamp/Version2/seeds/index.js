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
    const price = Math.floor(Math.random() * 1500) + 499;
    const campground = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: `https://source.unsplash.com/collection/483251`,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quo, incidunt assumenda culpa, necessitatibus accusantium excepturi nobis veritatis at minus doloremque ipsam tenetur corporis minima rerum rem beatae voluptas dignissimos.",
      price: price,
    });
    await campground.save();
  }
  console.log("Seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
