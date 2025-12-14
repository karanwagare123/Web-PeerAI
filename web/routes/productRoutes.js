const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/", controller.listProducts);
router.get("/product/:id", controller.productDetails);

module.exports = router;   // ✅ MUST export router directly
