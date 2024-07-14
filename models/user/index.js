const mongoose = require("mongoose");
const userSchema = require("./userSchema");

const user = mongoose.model("users", userSchema);

module.exports = user;