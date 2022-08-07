const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const theGodfather = new Movie({
//   title: "The Godfather",
//   year: 1972,
//   score: 9.2,
//   rating: "R",
// }).save();

// INSERTING
// Movie.insertMany([
//   {
//     title: "Star Wars: The Force Awakens",
//     year: 2015,
//     score: 8.3,
//     rating: "PG-13",
//   },
//   { title: "The Dark Knight", year: 2008, score: 9.0, rating: "PG-13" },
//   { title: "Inception", year: 2010, score: 8.8, rating: "PG-13" },
//   {
//     title: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//     score: 8.9,
//     rating: "PG-13",
//   },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//     score: 8.8,
//     rating: "PG-13",
//   },
//   {
//     title: "The Lord of the Rings: The Two Towers",
//     year: 2002,
//     score: 8.9,
//     rating: "PG-13",
//   },
//   { title: "The Matrix", year: 1999, score: 8.7, rating: "R" },
// ])
//   .then(() => {
//     console.log("Inserted movies");
//     console.log(data);
//   })
//   .catch((err) => console.error("Could not insert movies", err));

// FINDING
// Movie.find({ Year: { $gt: 1990 } }).then((m) => console.log(m));
// Movie.updateOne({ title: "The Matrix" }, { year: 1999 }).then((res) => {
//   console.log(res);
// });

// UPDATING
// Movie.updateMany(
//   { title: { $in: ["The Matrix", "Inception"] } },
//   { score: 10 }
// ).then((res) => {
//   console.log(res);
// });

// Movie.find({ score: 10 }).then((m) => console.log(m));

// FINDS, RETURNS AND RETURNS
// Movie.findOneAndUpdate(
//   { title: "The Lord of the Rings: The Fellowship of the Ring" },
//   { score: 10 }
// ).then((res) => {
//   console.log(res);
// });

// Movie.findOneAndUpdate(
//   { title: "Star Wars: The Force Awakens" },
//   { score: 7.5 },
//   { new: true }
// ).then((res) => {
//   console.log(res);
// });

// DELETING
// Movie.remove({ title: "The Matrix" }).then((res) => console.log(res));

// Movie.deleteMany({ score: { $lt: 8 } }).then((res) => console.log(res));

// FINDS AND DELETES
// Movie.findOneAndDelete({ title: "Inception" }).then((res) => {
//   console.log(res);
// });
