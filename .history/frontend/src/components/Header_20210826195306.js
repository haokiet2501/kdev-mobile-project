import React from 'react'
import '../css/Header.css'
const Header = () => {
    return (
        <>
            <div className='nav'>
                <a href="/" className='logo'>DevMobile</a>
                <ul>
                    <li><a href="#">Giỏ Hàng</a></li>
                    <li><a href="#">Đăng nhập</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header
