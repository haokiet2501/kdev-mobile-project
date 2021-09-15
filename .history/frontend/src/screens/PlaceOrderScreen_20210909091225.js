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
          <div className="placeorder_main">
            <h2>Giao Hàng</h2>
            <p>
              <strong>Địa chi</strong>
            </p>
          </div>
        </div>
        <div>Alo</div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
