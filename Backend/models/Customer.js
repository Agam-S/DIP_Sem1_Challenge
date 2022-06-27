const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  CustID: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  SegID: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Segment",
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  PostCode: {
    type: Number,
    required: true,
  },
  Region: {
    type: mongoose.Schema.Types.String,
    ref: "Region",
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
