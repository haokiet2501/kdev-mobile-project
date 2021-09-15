import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Car
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductCarousel.css";
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
    <>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img
              className="img_caroucel"
              src={product.image}
              alt={product.name}
            />
            <h3>
              {product.name} ({product.price})
            </h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCarousel;
