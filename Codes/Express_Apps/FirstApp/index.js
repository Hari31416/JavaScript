const express = require("express");
const app = express();

// Runs whenver a request is made to the server
// app.use((req, res) => {
//   //   console.log("We got a new request!");
//   //   console.dir(req);
//   //   res.send("Hello world")
//   //   res.send({ color: "red" });
//   res.send("<h1>Hello world</h1>");
// });

// Listen for requests
app.listen(8080, () => {
  console.log("listening on port 8080");
});

app.get("/", (req, res) => {
  //   console.log("Cat requested");
  res.send("<h1>Home Page!!! </h1>");
});

app.get("/cats", (req, res) => {
  //   console.log("Cat requested");
  res.send("<h1>Cats</h1>");
});

app.get("/dogs", (req, res) => {
  //   console.log("Dog requested");
  res.send("<h1>Dog</h1>");
});

app.post("/cats", (req, res) => {
  res.send("A post request to cats");
});

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`<h1>Welcome to the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  console.log(req.params);
  const { subreddit, postID } = req.params;
  res.send(
    `<h1>You are on the PostID: ${postID} of ${subreddit} subreddit</h1>`
  );
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.send("<h1>Please provide a search query</h1>");
  }
  res.send(`<h1>You are searching for ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("<h1>404 Page not found</h1>");
});
