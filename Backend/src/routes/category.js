const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const { addCategory, getCategories } = require("../controller/category");
const { adminMiddleware, requireSignin } = require("../common-middleware");
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
  "/category/create",
  requireSignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getcategories", getCategories);

module.exports = router;
