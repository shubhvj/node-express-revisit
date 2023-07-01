const path = require("path");
const rootDir = require("../helpers/path");

const Express = require("express");

const router = Express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
