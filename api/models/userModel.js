const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    country: String,
    birth_date: Date,
    description: String,
    password: String,
  })
);

module.exports = User;