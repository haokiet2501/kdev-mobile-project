import React from 'react'
import '../css/Header.css'
import { useDispatch, useSelector}
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='nav'>
                <Link to="/" className='logo'>DevMobile</Link>
                <ul>
                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                    <li className="dropdown">
                        HaoKiet
                        <i class='bx bx-caret-down' ></i>
                        <ul>
                            <li>Hồ sơ <i class='bx bx-clipboard'></i></li>
                            <li>Đăng xuất <i class='bx bx-log-out'></i></li>
                        </ul>
                    </li>
                    <li><Link to="/login">Đăng nhập</Link></li>
                </ul>
            </div>  
        </>
    )
}

export default Header
