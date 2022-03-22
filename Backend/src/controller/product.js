const slugify = require("slugify");
const Product = require("../models/product");

exports.createProduct = (req, res) => {
  const { name, price, description, category, quantity } = req.body;
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((f) => {
      return { img: f.filename };
    });
  }
  const product = new Product({
    name: name,

    slug: slugify(name),
    price,
    description,
    productPictures,
    category,
    quantity,
    createdBy: req.user._id,
  });
  // res.status(200).json({ file: req.files, body: req.body });
  product.save((error, product) => {
    if (error) {
      return res.status(400).json({ error });
    }

    if (product) {
      res.status(201).json({ product });
    }
  });

  //   res.status(200).json({ message: "Hello" });
};
