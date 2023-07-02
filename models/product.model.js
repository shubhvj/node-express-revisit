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
    } else {
      return cb([]);
    }
  });
};

module.exports = class Product {
  constructor(title, description, imageURL, price) {
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
    this.price = price;
  }
  save() {
    this.id = Math.random().toString();
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
