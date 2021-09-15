import React, { useState } from 'react'
import '../css/ShippingScreen.css'
import { useDispatch, useSelector } from "react-redux";


const ShippingScreen = ({ history }) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    return (
        <>
            <div className="shipping">
            <form onSubmit={submitHandler}>
          <div className="register_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>
            </form>
            </div>
        </>
    )
}

export default ShippingScreen
