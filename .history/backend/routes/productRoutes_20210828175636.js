import express from 'express'
import asyncHandler from ''
const router = express.Router()
import Product from '../models/productModel'

router.get("/", (req, res) => {
    const products = 
    res.json(products)
})
  
router.get("/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

export default router