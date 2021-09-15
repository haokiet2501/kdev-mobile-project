import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/PlaceOrderScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {

  
  const cart = useSelector((state) => state.cart);

  // calculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const placeOrderHandler = () => {};

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeorder_col">
        <div>
          <div className="placeorder_shipping">
            <h2>Giao Hàng</h2>
            <p>
              <strong>Địa chỉ: </strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>

          <div className="placeorder_payment">
            <h2>Thanh Toán</h2>
            <p>
              <strong>Phương thức thanh toán: </strong>
              {cart.paymentMethod}
            </p>
          </div>

          <div className="placeorder_payment">
            <h2>Đơn Hàng</h2>
            {cart.cartItems.map((item, index) => (
              <div className="order_main" key={index}>
                <div className="order_item">
                  <div className="order_item-image">
                    <img
                      className="image_order"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <Link
                    className="order_item-name"
                    to={`/product/${item.product}`}
                  >
                    {item.name}
                  </Link>
                  <div className="order_item-qty">
                    {item.qty} x ${item.price} = ${item.qty * item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="order_now">
            <h2>Tổng Thanh Toán</h2>
            <div className="order_sale">
              <span className="order_text-item">Tổng đơn hàng:</span>
              <span className="order_text-one">${cart.itemsPrice}</span>
            </div>

            <div className="order_sale">
              <span className="order_text-item">Phí vận chuyển:</span>
              <span className="order_text-two">${cart.shippingPrice}</span>
            </div>

            <div className="order_sale">
              <span className="order_text-item">Thuế:</span>
              <span className="order_text-three">${cart.taxPrice}</span>
            </div>

            <div className="order_sale">
              <span className="order_text-item">Tổng:</span>
              <span className="order_text-four">${cart.totalPrice}</span>
            </div>

            <div className="order_button">
              <button
                type="submit"
                className="btn-order"
                disabled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
