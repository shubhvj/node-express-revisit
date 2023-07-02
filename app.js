const path = require("path");
const Express = require("express");
const app = Express();

const { get404 } = require("./controllers/error.controller");
app.set("view engine", "ejs");
app.set("views", "views");

const parser = require("body-parser");

app.use(parser.urlencoded({ extended: false }));

app.use(Express.static(path.join(__dirname, "public")));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("*", get404);

app.listen(3333);
