const mongoose = require("mongoose");
const Category = require("./Category");

const productSchema = new mongoose.Schema({
  ProdID: {
    type: String,
    required: true,
  },
  CatID: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Category",
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  UnitPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
