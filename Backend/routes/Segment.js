const router = require("express").Router();
const mongoose = require("mongoose");
const Segment = require("../models/Segment");

router.get("/", async (req, res) => {
  try {
    const foundSegment = await Segment.find({});
    res.json(foundSegment);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:SegID", async (req, res) => {
  try {
    const foundSegment = await Segment.findOne({ CatID: req.params.SegID });
    res.json(foundSegment);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Segment({
      SegID: req.body.SegID,
      SegName: req.body.SegName,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete Segment
router.delete("/:SegID", async (req, res) => {
  try {
    const removedCat = await Segment.deleteOne({ CatID: req.params.SegID });
    res.json(removedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
