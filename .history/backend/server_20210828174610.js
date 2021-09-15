import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
import products from "./data/products.js"
import productRoutes from "./"
dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running....")
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
