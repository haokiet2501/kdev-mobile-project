import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <>
            <div className="checkout">
                <div className="checkout_item">
                    {step1 ? (
                        <Link to="/login">
                            <div></div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps
