import React, { useState, useEffect } from "react";
import logoPayPal from '../logoPayPal.png'
import axios from 'axios'
import { Link } from "react-router-dom";
import "../css/OrderScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails } from "../actions/orderActions";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading:loadingPay, success:successPay } = orderPay;

  if (!loading) {
    // calculate price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if(!order || successPay) {
        dispatch(getOrderDetails(orderId));
    } else if(!window.paypal) {
      if(!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, order]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <>
      <h1>Đơn hàng {order._id}</h1>
      <div className="order_col">
        <div>
          <div className="order_shipping">
            <h2>Giao Hàng</h2>
            <p>
              <strong>Tên: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>
              <a style={{ color: "#333" }} href={`mailto:${order.user.email}`}>
                {order.user.email}
              </a>
            </p>
            <p>
              <strong>Địa chỉ: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message>Đã giao hàng {order.deliveredAt}</Message>
            ) : (
              <Message>Chưa giao hàng</Message>
            )}
          </div>

          <div className="order_payment">
            <h2>Thanh Toán</h2>
            <p style={{marginBottom: "10px"}}>
              <strong>Phương thức thanh toán: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Message>Đã thanh toán {order.paidAt}</Message>
            ) : (
              <Message>Chưa thanh toán</Message>
            )}
          </div>

          <div className="order_payment">
            <h2>Đơn Hàng</h2>
            {order.orderItems.length === 0 ? (
              <Message>Không có gì trong đơn hàng này.</Message>
            ) : (
              <>
                {order.orderItems.map((item, index) => (
                  <div className="orderscreen_main" key={index}>
                    <div className="orderscreen_item">
                      <div className="orderscreen_item-image">
                        <img
                          className="image_orderscreen"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <Link
                        className="orderscreen_item-name"
                        to={`/product/${item.product}`}
                      >
                        {item.name}
                      </Link>
                      <div className="orderscreen_item-qty">
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div>
          <div className="orderscreen_now">
            <h2>Tổng Thanh Toán</h2>
            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Tổng đơn hàng:</span>
              <span className="orderscreen_text-one">${order.itemsPrice}</span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Phí vận chuyển:</span>
              <span className="orderscreen_text-two">${order.shippingPrice}</span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Thuế:</span>
              <span className="orderscreen_text-three">${order.taxPrice}</span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Tổng:</span>
              <span className="orderscreen_text-four">${order.totalPrice}</span>
            </div>
            
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
