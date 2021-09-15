import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
    
  };

  return (
    <>
      <Link to="/">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      <div className="center">
        <h1>Đăng ký</h1>
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <div className="txt_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>

          <div className="txt_field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span></span>
            <label>Tên Email</label>
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

          <div className="txt_field">
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Nhập lại mật khẩu</label>
          </div>

          <button type="submit" className="btn_login">
            Đăng ký
          </button>

          <div className="signup">
            Bạn đã có tài khoản?
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              <span className="signup_link">Đăng nhập</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
