import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Fetch all products
// @routes  POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippinggAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if(orderItems && orderItems.length === 0) {
      res.status(400)
      throw new Error('Không có đơn hàng nào')
      return
  }
});
