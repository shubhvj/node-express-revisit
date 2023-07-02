const adminData = require("./admin");

const Express = require("express");

const router = Express.Router();
const { getProducts } = require("../controllers/products.controller");

router.get("/", getProducts);

module.exports = router;
