import React, { useState } from "react";
import "../css/ShippingScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrder = () => {
    const cart = useSelector(state => state.cart)

    return (
        <>
            
        </>
    )
}

export default PlaceOrder
