const Express = require("express");

const router = Express.Router();

const {
  getAddProduct,
  postAddProduct,
} = require("../controllers/products.controller");
const products = [];

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
