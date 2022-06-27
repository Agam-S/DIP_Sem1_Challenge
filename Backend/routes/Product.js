const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const foundProduct = await Product.find({});
    res.json(foundProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:ProdID", async (req, res) => {
  try {
    const foundProduct = await Product.findOne({ ProdID: req.params.ProdID });
    res.json(foundProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Product({
      ProdID: req.body.ProdID,
      CatID: req.body.CatID,
      Description: req.body.Description,
      UnitPrice: req.body.UnitPrice,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:ProdID", async (req, res) => {
  try {
    const removedCat = await Product.deleteOne({ ProdID: req.params.ProdID });
    res.json(removedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

// edit  product
router.put("/:ProdID", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { ProdID: req.params.ProdID },
      {
        ProdID: req.body.ProdID,
        CatID: req.body.CatID,
        Description: req.body.Description,
        UnitPrice: req.body.UnitPrice,
      }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
