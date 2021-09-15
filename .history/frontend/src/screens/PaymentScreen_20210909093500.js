import React, { useState } from "react";
import "../css/PaymentScreen.css";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState(PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <div className="payment">
        <h1>Thanh Toán</h1>
        <form onSubmit={submitHandler}>
          <div className="payment_check">
            <input
              type="radio"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="payment_text">PayPal or Credit Card</label>
          </div>

          {/* <div className="payment_check">
            <input
              type="radio"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="payment_text">Stripe</label>
          </div> */}
          <button className="btn_payment" type="submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
