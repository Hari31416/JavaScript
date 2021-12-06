const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Person", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return this.first + " " + this.last;
});

const Person = mongoose.model("Person", personSchema);

const rand = new Person({
  first: "Rand",
  last: "AL'Thor",
});
// rand.save();
console.log(rand.fullName);
