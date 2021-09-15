import React from "react";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div className="nav">
        <Link to="/" className="logo">
          DevMobile
        </Link>
        <ul>
          <li>
            <Link to="/cart">Giỏ Hàng</Link>
          </li>
          {userInfo ? (
            <li className="dropdown" id="username">
              {userInfo.name}
              <i class="bx bx-caret-down"></i>
              <ul>
                <li>
                  <Link to="/">Hồ sơ <i class="bx bx-clipboard"></i></Link>
                </li>
                <li onClick={logout}>
                  Đăng xuất <i class="bx bx-log-out"></i>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
