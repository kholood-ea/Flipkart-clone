const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// routes
const adminRoutes = require("./routes/admin/auth");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

// environment variables
env.config();

//middleware for parsing request body
// app.use(express.json())
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

mongoose
  .connect(`${process.env.DBconnection}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
