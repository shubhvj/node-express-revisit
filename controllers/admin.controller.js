const Product = require("../models/product.model");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const productTitle = req.body.title;
  const productDescription = req.body.description;
  const productImage = req.body.image;
  const productPrice = req.body.price;
  
  const product = new Product(
    productTitle,
    productDescription,
    productImage,
    productPrice
  );
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/product-list", {
      products: products,
      pageTitle: "Shop",
      path: "/admin/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
