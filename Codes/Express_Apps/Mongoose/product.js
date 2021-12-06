const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  category: {
    type: [String],
    default: ["cycling"],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
});

// CUSTOM METHODS
// METHODS
// productSchema.methods.greet = function () {
//   console.log("Hello!");
//   console.log(`From- ${this.name}`);
// };

// productSchema.methods.toggleSale = function () {
//   this.onSale = !this.onSale;
//   return this.onSale;
// };

// STATIC METHODS
// productSchema.statics.fireSale = function () {
//   return this.updateMany({}, { onSale: true, price: 0 });
// };

// const Product = mongoose.model("Product", productSchema);
// const p = new Product({ name: "Shoes", price: 100 });
// // p.greet();
// const findProduct = async () => {
//   const foundProduct = await Product.findOne({ name: "Bike Helmets" });
//   console.log(foundProduct);
//   await foundProduct.toggleSale();
//   console.log(foundProduct);
// };

// const Product = mongoose.model("Product", productSchema);

// Product.fireSale().then((res) => {
//   console.log(res);
// });

// VALIDATE PRODUCT
// const bike = new Product({ name: "Hero Bike", price: "49999" });
// bike
//   .save()
//   .then((data) => {
//     console.log("Bike saved to DB");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Bike not saved to DB", err.errors);
//   });

// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 999,
//   category: ["helmets", "cycling"],
//   size: "ML",
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("Bike saved to DB");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Bike not saved to DB", err.errors);
//   });

// const bike = new Product({
//   name: "Bike Gloves",
//   price: 300,
//   category: ["gloves", "cycling"],
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("Bike saved to DB");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Bike not saved to DB", err.errors);
//   });

// VALIDATING WHILE UPDATING
// Product.findOneAndUpdate(
//   { name: "Bike Gloves" },
//   { price: -499 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("Bike saved to DB");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Bike not saved to DB", err.errors);
//   });
