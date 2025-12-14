const Product = require("../models/productModel");

exports.listProducts = (req, res) => {
  res.render("products", { products: Product.getAll() });
};

exports.productDetails = (req, res) => {
  const product = Product.getById(parseInt(req.params.id));
  res.render("product-details", { product });
};
