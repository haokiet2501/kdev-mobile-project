import express from 'express'
const router = express.Router()

ro.get("/api/products", (req, res) => {
    res.json(products)
})
  
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

export default router