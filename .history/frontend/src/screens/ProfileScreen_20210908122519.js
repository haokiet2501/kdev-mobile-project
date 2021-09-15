import React, { useState, useEffect } from "react";
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
        <h2>Hồ Sơ</h2>
        {message && <Message>{message}</Message>}
        {error && <Message>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <div className="profile_field">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span></span>
            <label>Tên đăng nhập</label>
          </div>

          <div className="profile_field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span></span>
            <label>Tên email</label>
          </div>

          <div className="profile_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Mật khẩu</label>
          </div>

          <div className="profile_field">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Nhập lại mật khẩu</label>
          </div>

          <button type="submit" className="btn_profile">
            Cập nhật
          </button>
        </form>
      </div>
        </div>
        
        <div>My order</div>

    </div>
  );
};

export default ProfileScreen;
