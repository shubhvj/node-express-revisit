const path = require("path");
const rootDir = require("../helpers/path");
const adminData = require("./admin");

const Express = require("express");

const router = Express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
  });
});

module.exports = router;
