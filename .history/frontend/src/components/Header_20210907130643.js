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
                    <nav className="dropdown">
                        <div className="dropdown-select">
                            <div className="select">HaoKiet</div>
                            <i className='bx bx-caret-down' ></i>
                        </div>
                    </nav>
                    </li>
                    <li><Link to="/login">Đăng nhập</Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Header
