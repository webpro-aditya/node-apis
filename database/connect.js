const mongoose = require("mongoose");
require('dotenv').config();  // Loading env variables

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@backenddb.dnaf1.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

module.exports = mongoose;
