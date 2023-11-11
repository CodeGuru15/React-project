const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/register", (req, res) => {
  res.status(200).send("This is registration page");
});

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
