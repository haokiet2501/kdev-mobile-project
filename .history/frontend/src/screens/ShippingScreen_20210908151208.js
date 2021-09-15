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

          .register h1 {
    margin-top: 15px;
    text-align: center;
    padding: 0 0 25px 0;
    color: rgba(0, 0, 0, 0.8);
}

.register form {
    padding: 0 40px;
    box-sizing: border-box;
}

.register .register_field{
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
}

.register_field input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
}

.register_field label {
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}

.register_field span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
}

.register_field input:focus ~ label,
.register_field input:valid ~ label {
    top: -5px;
    color: #2691d9;
}

.register_field input:focus ~ span::before,
.register_field input:valid ~ span::before {
    width: 100%;
}
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
