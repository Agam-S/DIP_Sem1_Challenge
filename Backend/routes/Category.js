const router = require("express").Router();
const mongoose = require("mongoose");
const { rawListeners } = require("../models/Category");
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    const foundCategory = await Category.find({});
    res.json(foundCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:CatID", async (req, res) => {
  try {
    const foundCategory = await Category.findOne({ CatID: req.params.CatID });
    res.json(foundCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Category({
      CatID: req.body.CatID,
      CatName: req.body.CatName,
      Description: req.body.Description,
      UnitPrice: req.body.UnitPrice,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete category
router.delete("/:CatID", async (req, res) => {
  try {
    const removedCat = await Category.deleteOne({ CatID: req.params.CatID });
    res.json(removedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
