const path = require("path");
const Express = require("express");
const expressHandleBars = require("express-handlebars");
const app = Express();

app.engine(
  "hbs",
  expressHandleBars({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: 'hbs'
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

const parser = require("body-parser");

app.use(parser.urlencoded({ extended: false }));

app.use(Express.static(path.join(__dirname, "public")));
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("*", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found!" });
});

app.listen(3333);
