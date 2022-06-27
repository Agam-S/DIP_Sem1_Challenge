const router = require("express").Router();
const mongoose = require("mongoose");
const Shipping = require("../models/Shipping");

router.get("/", async (req, res) => {
  try {
    const foundShipping = await Shipping.find({});
    res.json(foundShipping);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:Shipping", async (req, res) => {
  try {
    const foundShipping = await Shipping.findOne({
      Shipping: req.params.Shipping,
    });
    res.json(foundShipping);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Shipping({
      ShipMode: req.body.ShipMode,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
