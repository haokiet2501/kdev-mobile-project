import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
    if(password !== confirmPassword) {
        setMessage('Mật khẩu không khớp')
    } else {
        dispatch(register(name, email, password))
    }
  };

  return (
    <>
      <Link to="/">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      <div className="register">
        <h1>Đăng ký</h1>
        {message && <Message>{message}</Message>}
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <div className="register_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>

          <div className="register_field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span></span>
            <label>Tên Email</label>
          </div>

          <div className="register_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Mật khẩu</label>
          </div>

          <div className="register_field">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Nhập lại mật khẩu</label>
          </div>

          <button type="submit" className="btn_register">
            Đăng ký
          </button>

          <div className="register_signup">
            Bạn đã có tài khoản?
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              <span className="register_link">Đăng nhập</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileScreen;
