const Product = require("./models/product");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

// const p = new Product({
//   name: "Apple",
//   price: 30,
//   category: "Fruits",
// });
// p.save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 99,
    category: "vegetables",
  },
  {
    name: "Organic Goddess Melon",
    price: 499,
    category: "fruits",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 399,
    category: "fruits",
  },
  {
    name: "Organic Celery",
    price: 149,
    category: "vegetables",
  },
  {
    name: "Chocolate Whole Milk",
    price: 219,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
