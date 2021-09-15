import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use('/api/products', productRoutes)

app.use((err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
