const express = require("express");
const productController = require("../controllers/product");
const auth = require("../auth");

const { verify, verifyAdmin } = auth;

const router = express.Router();

router.post("/", verify, verifyAdmin, productController.createProduct);

router.get("/all", verify, verifyAdmin, productController.retrieveAllProducts);

router.get("/active", productController.retrieveAllActive);

router.get("/:productId", productController.retrieveSingleProduct);

router.patch("/:productId/update", verify, verifyAdmin, productController.updateProduct);

router.patch("/:productId/archive", verify, verifyAdmin, productController.archiveProduct);

router.patch("/:productId/activate", verify, verifyAdmin, productController.activateProduct);

router.post("/search-by-name", productController.searchByName);

router.post("/search-by-price", productController.searchByPrice);

module.exports = router;