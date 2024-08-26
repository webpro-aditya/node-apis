const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProduct,
  updatedProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/add", createProduct);
router.get("/:id", getProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
