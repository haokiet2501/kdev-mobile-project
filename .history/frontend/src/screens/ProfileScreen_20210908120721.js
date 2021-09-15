import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProfileScreen.css";
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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
        if(!user.name) {
            dispatch(getUserDetails('profile'))
        } else {
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
    if(password !== confirmPassword) {
        setMessage('Mật khẩu không khớp')
    } else {
        // dispatch update profile
    }
  };

  return (
    <div className="profile_col">
        <div>
        <div className="profile">
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
        </form>
      </div>
        </div>
        
        <div>My order</div>

    </div>
  );
};

export default ProfileScreen;
