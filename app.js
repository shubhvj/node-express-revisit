const path = require("path");
const Express = require("express");

const app = Express();

const parser = require("body-parser");

app.use(parser.urlencoded({ extended: false }));

app.use(Express.static(path.join(__dirname, 'public')))
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3333);
