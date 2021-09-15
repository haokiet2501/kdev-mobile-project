import React, { useState } from "react";
import "../css/ShippingScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
    </>
  );
};

export default PlaceOrderScreen;
