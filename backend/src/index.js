const express = require("express");
const app = express();
const productRouter = require("../routes/poductRoutes");

const mongoose = require("mongoose");

const mongodbUri =
  "mongodb+srv://arijitpal6111:ecommerce@e-commerce.lfw6jgr.mongodb.net/E-commerce?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", () => console.log("MongoDB connected succesfully"));

app.use(express.json()); // we are using json format for the data

app.use(productRouter); // link routes

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1 style=color:red;text-align:center>Hello World, Welcome to Home page</h1>"
    );
});

app.get("/register", (req, res) => {
  res.status(200).send("This is registration page");
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
