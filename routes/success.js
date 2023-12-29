const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getSuccessProduct);

router.post("/success", productsController.postSuccessProduct);

module.exports = router;
