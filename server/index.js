const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/post");

app.use(cors());

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .set("strictQuery", true)
  .connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongo connection is open!");
  })
  .catch((err) => {
    console.log("Mongo connection error!");
    console.log(err);
  });

app.get("/api/posts", async (req, res) => {
  const posts = await Post.find({}).then((result) => {
    return res.json(result);
  });
});

app.post("/api/posts", async (req, res) => {
  const post = new Post(req.body);
  post
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
});

app.post("/api/posts/:id", async (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
});

app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ postId: id }).then((result) => {
    return res.json(result);
  });
});

app.get("/api", (_req, res) => {
  return res.json({ message: "You have reached the Forum Api" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
