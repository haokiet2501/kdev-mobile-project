import asyncHandler from 'express-async-handler'
import User from '../models/userModel'

// @desc    Auth
// @routes  GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})