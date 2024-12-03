const dbConfig = require("../../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model")(mongoose);
db.orders = require("./order.model")(mongoose);

module.exports = db;
