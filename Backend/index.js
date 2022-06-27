const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// file imports
const Category = require("./routes/Category");
const Segment = require("./routes/Segment");
const Product = require("./routes/Product");
const Customer = require("./routes/Customer");
const Region = require("./routes/Region");
const Shipping = require("./routes/Shipping");
const Order = require("./routes/Order");

mongoose.connect(
  "mongodb+srv://admin:admin1234@prac.r7c5f.mongodb.net/dip-challenge?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DBS");
  }
);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

// routes redirection
app.use("/category", Category);
app.use("/segment", Segment);
app.use("/product", Product);
app.use("/customer", Customer);
app.use("/region", Region);
app.use("/shipping", Shipping);
app.use("/order", Order);
// server start

const server = app.listen(8080, function () {
  console.log("API running on port 8080");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
module.exports = server;
