import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../css/ProductCarousel.css'
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <div id="slider">
        <input type="radio" name="slider" id="slider1" checked />
    
    </div>
  );
};

export default ProductCarousel;
