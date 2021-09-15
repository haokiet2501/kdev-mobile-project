import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Fetch all products
// @routes  POST /api/orders
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})