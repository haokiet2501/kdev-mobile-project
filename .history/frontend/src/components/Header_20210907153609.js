import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='nav'>
                <Link to="/" className='logo'>DevMobile</Link>
                <ul>
                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                    <li>
                        HaoKiet
                        <i class='bx bx-caret-down' ></i>
                        <ul>
                            <li><a>Hồ sơ</a></li>
                            <li>Đăng xuất</li>
                        </ul>
                    </li>
                    <li><Link to="/login">Đăng nhập</Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Header
