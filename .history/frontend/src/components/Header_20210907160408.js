import React from 'react'
import '../css/Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <>
            <div className='nav'>
                <Link to="/" className='logo'>DevMobile</Link>
                <ul>
                    <li><Link to="/cart">Giỏ Hàng</Link></li>
                    {userInfo ? () : <li><Link to="/login">Đăng nhập</Link></li>}
                </ul>
            </div>  
        </>
    )
}

export default Header