const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/auth.route");

const app = express();

// Constants

const PORT = process.env.PORT || 3001
const NAME = process.env.NAME
const PASSWORD = process.env.PASSWORD

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("uploads"));

// Routes
app.use(require("./routes/category.route"));
app.use(require("./routes/clothes.route"));
app.use(require("./routes/cart.route"));
app.use("/auth", authRoute);
app.use("/uploads", express.static(__dirname + "/uploads"));

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${NAME}:${PASSWORD}@cluster0.w5uga6x.mongodb.net/news911`,
    )

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start();
