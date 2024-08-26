//Loading env variables
require('dotenv').config();
//MongoDB Connection File
require('./database/connect');

const express = require("express");
const productRoute = require("./routes/product.route");
const app = express();
let PORT;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/products", productRoute);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

process.env.STATUS == 'production' ? (PORT = process.env.PROD_PORT) : (PORT = process.env.DEV_PORT);
app.listen(PORT);

