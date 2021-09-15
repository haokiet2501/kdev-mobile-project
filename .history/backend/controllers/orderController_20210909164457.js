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

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("Không có đơn hàng nào");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippinggAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});

export const 
