import React from 'react'
import '../css/Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
    return (
        <Router>
            <div className='nav'>
                <Link to="/" className='logo'>DevMobile</Link>
                <ul>
                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                    <li><Link to="/signin">Đăng nhập</Link></li>
                </ul>
            </div>  
        </Router>
    )
}

export default Header
