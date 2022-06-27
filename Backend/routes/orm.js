// make getProduct function in orm.js to get product by id
const Product = require("../models/Product");
const router = require("express").Router();
const mongoose = require("mongoose");

getProduct = async (id, qty) => {
  try {
    const foundprod = await Product.findOne({ ProdID: id });
    const total = foundprod.UnitPrice * qty;
    return total;
  } catch (err) {
    console.log(err);
  }
};
totalGst = async (total) => {
  try {
    const gst = total * 1.1;
    return gst;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getProduct, totalGst };
