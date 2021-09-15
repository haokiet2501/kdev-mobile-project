import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader  from '../components/Loader'
// import { login } from '../actions/userActions'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="login_center">
            <div className="center">
                <h1>Đăng nhập</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required/>
                        <label>Tên đăng nhập</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" required/>
                        <label>Mật khẩu</label>
                    </div>
                    <button type="submit">Đăng nhập</button>
                    <div className="signup_link">
                        
                    </div>
                </form>

            </div>
        </div>
    )
}

export default LoginScreen
