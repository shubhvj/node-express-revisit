const fs = require("fs");
const path = require("path");
const rootDir = require("../helpers/path");
const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    }
    if (!err && JSON.parse(data).length > 0) {
      return cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
