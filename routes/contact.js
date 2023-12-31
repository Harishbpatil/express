const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getContactProduct);

router.post("/contact", productsController.postContactProduct);

module.exports = router;
