const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodoverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodoverride("_method"));

let comments = [
  {
    id: uuid(),
    username: "Lan",
    comment: "Duty is heavier than a mountain, death lighter than a feather.",
  },
  {
    id: uuid(),
    username: "Moiraine",
    comment: "Wheel weaves as the Wheel wills.",
  },
  {
    id: uuid(),
    username: "Rand",
    comment:
      "He came like the wind, like the wind touched everything, and like the wind was gone.",
  },
  {
    id: uuid(),
    username: "Perrin",
    comment: "This is just a weave.",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
  // res.send("Comment added!");
});

app.get("/tacos", (req, res) => {
  res.send("Get /tacos responce");
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  // res.send("UPDATING COMMENT");
  const id = req.params.id;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  id = req.params.id;
  const comment = comments.find((c) => c.id === id);
  res.render("/comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  id = req.params.id;
  const comment = comments.find((c) => c.id === id);
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Post /tacos responce: ${meat} ${qty}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
