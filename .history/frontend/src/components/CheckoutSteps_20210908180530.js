import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CheckoutSteps.css'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <>
            <div className="checkout">
                <div className="checkout_item">
                    {step1 ? (
                        <Link to="/login">
                            <div className="checkout_login">Đăng nhập</div>
                        </Link>
                    ) : (
                        <div className="checkout_login" di>Đăng nhập</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step2 ? (
                        <Link to="/shipping">
                            <div className="checkout_login">Giao hàng</div>
                        </Link>
                    ) : (
                        <div className="checkout_login" disabled>Giao hàng</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step3 ? (
                        <Link to="/payment">
                            <div className="checkout_login">Thanh toán</div>
                        </Link>
                    ) : (
                        <div className="checkout_login" disabled>Thanh toán</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step4 ? (
                        <Link to="/placeorder">
                            <div className="checkout_login">Đặt hàng</div>
                        </Link>
                    ) : (
                        <div className="checkout_login" disabled>Đặt hàng</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps
