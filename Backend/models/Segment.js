const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema({
  SegID: {
    type: Number,
    required: true,
  },
  SegName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Segment", segmentSchema);
