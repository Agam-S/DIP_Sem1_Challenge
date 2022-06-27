const router = require("express").Router();
const mongoose = require("mongoose");
const Customer = require("../models/Customer");

router.get("/", async (req, res) => {
  try {
    const foundCustomer = await Customer.find({});
    res.json(foundCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:CustID", async (req, res) => {
  try {
    const foundCustomer = await Customer.findOne({ CustID: req.params.CustID });
    res.json(foundCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCat = new Customer({
      CustID: req.body.CustID,
      FullName: req.body.FullName,
      SegID: req.body.SegID,
      Country: req.body.Country,
      City: req.body.City,
      State: req.body.State,
      PostCode: req.body.PostCode,
      Region: req.body.Region,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:CustID", async (req, res) => {
  try {
    const removedCat = await Customer.deleteOne({ CustID: req.params.CustID });
    res.json(removedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

// edit  Customer
router.put("/:CustID", async (req, res) => {
  try {
    const updatedCustomer = await Customer.updateOne(
      { CustID: req.params.CustID },
      {
        CustID: req.body.CustID,
        CatID: req.body.CatID,
        Description: req.body.Description,
        UnitPrice: req.body.UnitPrice,
      }
    );
    res.json(updatedCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
