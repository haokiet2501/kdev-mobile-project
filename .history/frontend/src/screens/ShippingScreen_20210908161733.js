import React, { useState } from "react";
import "../css/ShippingScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  };

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
            <label>Thành phố</label>
          </div>

          <div className="shipping_field">
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
            <span></span>
            <label>PostalCode</label>
          </div>

          <div className="shipping_field">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <span></span>
            <label>Quốc gia</label>
          </div>

          <button className="btn_shipping" type="submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
