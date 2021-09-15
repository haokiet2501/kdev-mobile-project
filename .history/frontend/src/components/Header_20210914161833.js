import React from "react";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  };

  return (
    <>
      <div className="nav">
        <Link to="/" className="logo">
          DevMobile
        </Link>
        <ul>
          <li>
            <Link className="cart_header" to="/cart">Giỏ Hàng</Link>
          </li>
          {userInfo ? (
            <li className="dropdown" id="username">
              {userInfo.name}
              <i className="bx bx-caret-down"></i>
              <ul>
                <li>
                  <Link to="/profile">
                    Hồ sơ <i className="bx bx-clipboard"></i>
                  </Link>
                </li>
                <li onClick={logoutHandler}>
                  Đăng xuất <i className="bx bx-log-out"></i>
                </li>
              </ul>
            </li>
          ) : (
            <li className="login_header">
              <Link to="/login">Đăng nhập</Link>
            </li>
          )}
          {userInfo && userInfo.isAdmin && (
            <li className="dropdown">
              Quản Lí
              <i className="bx bx-caret-down"></i>
              <ul>
                <li>
                  <Link to="/admin/userlist">
                    Tài khoản <i className="bx bx-user-circle"></i>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/productlist">
                    Sản phẩm <i className="bx bxl-product-hunt"></i>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/orderlist">
                    Giao hàng <i className="bx bxs-user-badge"></i>
                  </Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
