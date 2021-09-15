import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CheckoutSteps.css'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <>
            <div className="checkout">
                <div className="checkout_item">
                    {step1 ? (
                        <Link className="checkout_login" to="/login">
                            <div>Đăng nhập</div>
                        </Link>
                    ) : (
                        <div disabled>Đăng nhập</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step2 ? (
                        <Link className="checkout_login" to="/shipping">
                            <div>Giao hàng</div>
                        </Link>
                    ) : (
                        <div disabled>Giao hàng</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step3 ? (
                        <Link className="checkout_login" to="/payment">
                            <div>Thanh toán</div>
                        </Link>
                    ) : (
                        <div disabled>Thanh toán</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step4 ? (
                        <Link className="checkout_login" to="/placeorder">
                            <div>Đặt hàng</div>
                        </Link>
                    ) : (
                        <div disabled>Đặt hàng</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps
