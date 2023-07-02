const Express = require("express");

const router = Express.Router();
const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct
} = require("../controllers/shop.controller");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productID", getProduct);

router.get("/cart", getCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
