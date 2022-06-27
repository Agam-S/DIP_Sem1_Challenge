const router = require("express").Router();
const mongoose = require("mongoose");
const Order = require("../models/Order");
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const foundOrder = await Order.find({});
    res.json(foundOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:OrderDate", async (req, res) => {
  try {
    const foundOrder = await Order.find({ _id: req.params.OrderDate });
    res.json(foundOrder);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/cust/:CustID", async (req, res) => {
  try {
    const foundOrder = await Order.find({ CustID: req.params.CustID });
    res.json(foundOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/pro", async (req, res) => {
  try {
    const foundProduct = await Product.findOne({ ProdID: req.body.ProdID });
    const UnitPrice = foundProduct.UnitPrice;

    totalPrice = UnitPrice * req.body.Quantity;
    totalGST = totalPrice * 1.1;

    const newCat = new Order({
      CustID: req.body.CustID,
      ProdID: req.body.ProdID,
      OrderDate: req.body.OrderDate,
      Quantity: req.body.Quantity,
      ShipDate: req.body.ShipDate,
      ShipMode: req.body.ShipMode,
      TotalValue: totalPrice,
      GST: totalGST,
    });
    const savedCat = await newCat.save();
    res.json(savedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:Order", async (req, res) => {
  try {
    const removedCat = await Order.deleteOne({
      _id: req.params.Order,
    });
    res.json(removedCat);
  } catch (err) {
    res.json({ message: err });
  }
});

// edit  Order
router.put("/:_id", async (req, res) => {
  try {
    const foundProduct = await Product.findOne({ ProdID: req.body.ProdID });
    const UnitPrice = foundProduct.UnitPrice;

    totalPrice = UnitPrice * req.body.Quantity;
    totalGST = (await totalPrice) * 1.1;

    const updatedOrder = await Order.updateOne(
      { _id: req.params._id },
      {
        CustID: req.body.CustID,
        ProdID: req.body.ProdID,
        OrderDate: req.body.OrderDate,
        Quantity: req.body.Quantity,
        ShipDate: req.body.ShipDate,
        ShipMode: req.body.ShipMode,
        TotalValue: totalPrice,
        GST: totalGST,
      }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
