const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Constants

const { PORT, MONGO_SERVER } = process.env;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("uploads"));

// Routes
app.use(require("./routes/category.route"));
app.use(require("./routes/clothes.route"));
app.use(require("./routes/cart.route"));

async function start() {
  try {
    await mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () => {
      console.log(`Server started: http://localhost:${PORT}/news`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

start();
