const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createProduct, getProducts } = require("../controller/product");
const { adminMiddleware, requireSignin } = require("../common-middleware");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, shortid.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPictures"),
  createProduct
);
router.get("/product/get", getProducts);

module.exports = router;
