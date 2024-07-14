const mongoose = require("mongoose");
const schemaType = require("../../utils/types");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);