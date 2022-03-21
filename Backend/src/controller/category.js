const slugify = require("slugify");
const Category = require("../models/category");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

const createCategories = (cats, ParentId = null) => {
  const categoryList = [];
  let categories;
  if (ParentId == null) {
    categories = cats.filter((c) => c.parentId == undefined);
  } else {
    categories = cats.filter((c) => c.parentId == ParentId);
  }
  for (let cate of categories) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: createCategories(cats, cate._id),
    });
  }
  return categoryList;
};
exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (categories) {
      const categoryList = createCategories(categories);
      res.status(200).json({ categoryList });
    }
  });
};
