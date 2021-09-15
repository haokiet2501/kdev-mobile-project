import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import '../css/LoginScreen.css'
// import Message from '../components/Message'
// import Loader  from '../components/Loader'
// import { login } from '../actions/userActions'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className="center">
                <h1>Đăng nhập</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required/>
                        <span></span>
                        <label>Tên đăng nhập</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" required/>
                        <span></span>
                        <label>Mật khẩu</label>
                    </div>
                    <button type="submit" className="btn_login">Đăng nhập</button>
                    <div className="signup_link">
                        Bạn chưa có tài khoản? <Link to="/register"><spa</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen
