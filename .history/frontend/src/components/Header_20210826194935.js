import React from 'react'
import '../css/Header.css'
const Header = () => {
    return (
        <>
            <div className='nav'>
                <a href="/">DevMobile</a>
                <ul>
                    <li><a href="#">Giỏ Hàng</a></li>
                    <li><a href="#">SignIn</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header
