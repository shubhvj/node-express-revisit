const path = require("path");
const rootDir = require("../helpers/path");

const Express = require("express");

const router = Express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
