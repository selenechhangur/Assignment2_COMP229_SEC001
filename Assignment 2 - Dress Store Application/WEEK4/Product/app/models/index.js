const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.url;

db.products = require("./product.model.js")(mongoose); //model view controller mvc
db.categories = require("./category.model.js")(mongoose);

module.exports = db;

//where to define
