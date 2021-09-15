import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../contants/userContants";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
      if(!user.name || user._id !== userId) {
          dispatch(getUserDetails(userId))
      } else {
          setName(user.name)
          setEmail(user.email)
          setIsAdmin(user.isAdmin)
      }
  }, [dispatch, userId, user]);

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
      <div className="register" style={{ marginTop: "35px" }}>
        <h1>Sửa Hồ Sơ</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
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
              <label>Tên email</label>
            </div>

            <div className="checked">
              <input
                className="input-check"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <label>isAdmin</label>
            </div>

            <button
              type="submit"
              style={{ marginBottom: "20px" }}
              className="btn_register"
            >
              Cập nhật
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UserEditScreen;
