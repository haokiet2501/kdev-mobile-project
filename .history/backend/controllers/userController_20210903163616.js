import asyncHandler from 'express-async-handler'
import User from '../models/userModel'

// @desc    Auth user & get token
// @routes  POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})