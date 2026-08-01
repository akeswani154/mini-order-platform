const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const orderRoutes = require("./routes/inventory.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Order Service is running 🚀",
  });
});

app.use("/api/orders", orderRoutes);

module.exports = app;