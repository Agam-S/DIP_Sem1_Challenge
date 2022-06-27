const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema({
  ShipMode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Shipping", shippingSchema);
