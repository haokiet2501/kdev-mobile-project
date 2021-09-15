import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/PlaceOrderScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails } from "../actions/orderActions";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loanding, error } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, []);

  return loading ? <Loader /> : error ? <Mé
  
};

export default OrderScreen;
