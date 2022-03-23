const express = require("express");
const router = express.Router();

const { addItemToCart } = require("../controller/cart");
const { userMiddleware, requireSignin } = require("../common-middleware");

router.post("/cart/add-to", requireSignin, userMiddleware, addItemToCart);
// router.get("/category/getcategories", getCategories);

module.exports = router;
