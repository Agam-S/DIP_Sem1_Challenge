const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  CatID: {
    type: Number,
    required: true,
  },
  CatName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
