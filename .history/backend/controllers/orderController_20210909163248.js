import asyncHandler from 'express-async-handler'
import Order from '../models/'

// @desc    Fetch all products
// @routes  GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})