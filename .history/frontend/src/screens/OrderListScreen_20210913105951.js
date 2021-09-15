import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1
        style={{
          color: "rgba(0, 0, 0, 0.8)",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Quản Lí Đơn Hàng
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tài khoản</th>
              <th>Ngày</th>
              <th>Tổng đơn hàng</th>
              <th>Thanh toán</th>
              <th>Giao hàng</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="bx bx-x" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="bx bx-x" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/admin/order/${order._id}`}>
                    <button
                      className="btn_details"
                    >
                        Chi tiết
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderListScreen;
