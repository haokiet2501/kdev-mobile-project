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
                
            </div>
        </>
    )
}

export default ShippingScreen
