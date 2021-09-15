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
                    <div className="nav_drop">
                        <label>Navdrop
                            <i class='bx bxs-chevron-down'></i>
                        </label>
                        <ul className="nav_menu">
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                    <li><Link to="/login">Đăng nhập</Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Header
