import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='nav'>
                a to="/" className='logo'>DevMobile</a>
                <ul>
                    <li><a to="/cart">Giỏ Hàng</a></li>
                    <li><a to="/signin">Đăng nhập</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header
