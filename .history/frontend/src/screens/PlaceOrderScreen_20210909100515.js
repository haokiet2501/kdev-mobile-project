import React, { useState } from "react";
import "../css/PlaceOrderScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

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
            <h2>Món Hàng</h2>
              {cart.cartItems.map((item, index) => (
                <div key={index} className="order_items">
                  <div key={index}>alo</div>
                  <div>alo</div>
                </div>
              ))}
          </div>
        </div>
        <div>Alo</div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
