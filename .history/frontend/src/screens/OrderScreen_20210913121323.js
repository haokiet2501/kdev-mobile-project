import React, { useState, useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/OrderScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails, payOrder, deliverOrder } from "../actions/orderActions";
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from "../contants/orderContants";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

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
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });

      dispatch(getOrderDetails(orderId));
    } else if (!window.paypal) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <>
      <h1>????n h??ng {order._id}</h1>
      <div className="order_col">
        <div>
          <div className="order_shipping">
            <h2>Giao H??ng</h2>
            <p>
              <strong>T??n: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>
              <a style={{ color: "#333" }} href={`mailto:${order.user.email}`}>
                {order.user.email}
              </a>
            </p>
            <p>
              <strong>?????a ch???: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message>???? x??c nh???n {order.deliveredAt}</Message>
            ) : (
              <Message>Ch??? x??c nh???n giao h??ng giao h??ng</Message>
            )}
          </div>

          <div className="order_payment">
            <h2>Thanh To??n</h2>
            <p style={{ marginBottom: "10px" }}>
              <strong>Ph????ng th???c thanh to??n: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Message>???? thanh to??n {order.paidAt}</Message>
            ) : (
              <Message>Ch??a thanh to??n</Message>
            )}
          </div>

          <div className="order_payment">
            <h2>????n H??ng</h2>
            {order.orderItems.length === 0 ? (
              <Message>Kh??ng c?? g?? trong ????n h??ng n??y.</Message>
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
            <h2>T???ng Thanh To??n</h2>
            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">T???ng ????n h??ng:</span>
              <span className="orderscreen_text-one">${order.itemsPrice}</span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Ph?? v???n chuy???n:</span>
              <span className="orderscreen_text-two">
                ${order.shippingPrice}
              </span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">Thu???:</span>
              <span className="orderscreen_text-three">${order.taxPrice}</span>
            </div>

            <div className="orderscreen_sale">
              <span className="orderscreen_text-item">T???ng:</span>
              <span className="orderscreen_text-four">${order.totalPrice}</span>
            </div>

            {!order.isPaid && (
              <div className="orderscreen_button">
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  ></PayPalButton>
                )}
              </div>
            )}

            {userInfo.isAdmin && order.isPaid && !order.isDelivered}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
