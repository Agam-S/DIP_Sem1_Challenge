const router = require("express").Router();
const mongoose = require("mongoose");
const Region = require("../models/Region");

router.get("/", async (req, res) => {
  try {
    const foundRegion = await Region.find({});
    res.json(foundRegion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:Region", async (req, res) => {
  try {
    const foundRegion = await Region.findOne({ Region: req.params.Region });
    res.json(foundRegion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Region({
      Region: req.body.Region,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
