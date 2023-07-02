const Express = require("express");

const router = Express.Router();

const {
  getAddProduct,
  postAddProduct,
  getProducts
} = require("../controllers/admin.controller");

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

router.get("/products", getProducts);

module.exports = router;
