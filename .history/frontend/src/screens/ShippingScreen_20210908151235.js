import React, { useState } from "react";
import "../css/ShippingScreen.css";
import { useDispatch, useSelector } from "react-redux";

const ShippingScreen = ({ history }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
      e.preventDefault()

  }

  return (
    <>
      <div className="shipping">
        <h1>Đơn Hàng</h1>
        <form onSubmit={submitHandler}>
          <div className="shipping_field">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <span></span>
            <label>Địa chỉ</label>
          </div>

          <div className="shipping_field">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <span></span>
            <label>Thành Phố</label>
          </div>

          <div className="shipping_field">
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
            <span></span>
            <label>Postal</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
