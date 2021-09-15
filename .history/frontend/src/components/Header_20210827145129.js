import React from 'react'
import '../css/Header.css'
import Link

const Header = () => {
    return (
        <>
            <div className='nav'>
                <Link to="/" className='logo'>DevMobile</Link>
                <ul>
                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                    <li><Link to="/signin">Đăng nhập</Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Header
