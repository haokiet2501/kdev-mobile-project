import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProfileScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../contants/userContants";
import { listMyOrders } from "../actions/orderActions";

const ProfileScreen = ({ history }) => {
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

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
    if (password !== confirmPassword) {
      setMessage("Mật khẩu không khớp");
    } else {
      // dispatch update profile
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <div className="profile_col">
      <div>
        <div className="profile">
          <h2>Hồ Sơ</h2>
          {message && <Message>{message}</Message>}
          {error && <Message>{error}</Message>}
          {success && <Message>Thông tin đã được cập nhật</Message>}
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
              />
              <span></span>
              <label>Mật khẩu</label>
            </div>

            <div className="profile_field">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

      <div>
        <div className="myorder_main">
          <h2>Lịch sử đặt hàng</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
