const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.u3ff7u5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
//  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.eoppj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

module.exports = mongoose;