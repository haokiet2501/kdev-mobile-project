import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Fetch all products
// @routes  POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippinggAddress, paymentMethod, itemsPrice, taxPrice, shippingPri } = req.body
})