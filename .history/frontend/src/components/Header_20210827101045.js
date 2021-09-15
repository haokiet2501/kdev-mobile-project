import React from 'react'
import '../css/Header.css'
const Header = () => {
    return (
        <>
            <div className='nav'>
                <a tp="/" className='logo'>DevMobile</a>
                <ul>
                    <li><a tp="/cart">Giỏ Hàng</a></li>
                    <li><a tp="/signin">Đăng nhập</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header
