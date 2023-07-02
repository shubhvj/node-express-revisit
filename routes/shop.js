const Express = require("express");

const router = Express.Router();
const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
} = require("../controllers/shop.controller");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.get("/checkout", getCheckout);

module.exports = router;
