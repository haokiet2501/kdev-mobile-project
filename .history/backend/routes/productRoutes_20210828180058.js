import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel'

router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))
  
router.get("/:id", (req, res) => {
    // const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404).json(())
    }
})

export default router