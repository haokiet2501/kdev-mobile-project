import React from 'react'
import { Link } from 'react-router-dom'

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
                        <div className="checkout_login" disabled>Đăng nhập</div>
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
                            <div className="checkout_login"></div>
                        </Link>
                    ) : (
                        <div className="checkout_login" disabled>Đăng nhập</div>
                    )}
                </div>

                <div className="checkout_item">
                    {step1 ? (
                        <Link to="/login">
                            <div className="checkout_login">Đăng nhập</div>
                        </Link>
                    ) : (
                        <div className="checkout_login" disabled>Đăng nhập</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutSteps
