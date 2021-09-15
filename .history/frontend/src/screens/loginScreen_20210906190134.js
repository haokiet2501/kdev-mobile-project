import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/LoginScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
      if(userInfo) {
          history.push(redirect)
      }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
      e.preventDefault()
    //   dispatch login
    dispatch(login(email, password))
  }

  return (
    <div>
      <div className="center">
        <h1>Đăng nhập</h1>
        {error && <Message>{error}</Message>}
        {loading && }
        <form method="post" onSubmit={submitHandler}>
          <div className="txt_field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Mật khẩu</label>
          </div>
          <button type="submit" className="btn_login">
            Đăng nhập
          </button>
          <div className="signup">
            Bạn chưa có tài khoản?
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              <span className="signup_link">Đăng kí</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
