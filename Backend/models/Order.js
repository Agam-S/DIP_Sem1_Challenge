const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  CustID: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Customer",
    required: true,
  },
  ProdID: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Product",
    required: true,
  },
  OrderDate: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  ShipDate: {
    type: String,
    required: true,
  },
  ShipMode: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Shipping",
    required: true,
  },
  TotalValue: {
    type: Number,
    required: true,
  },
  GST: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
