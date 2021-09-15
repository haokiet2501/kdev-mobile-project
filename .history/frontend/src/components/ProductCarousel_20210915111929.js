import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../css/ProductCarousel.css'
import Loader from "./Loader";
import Message from "./Message";
import Slider from "react-slick";
import { listTopProducts } from "../actions/productActions";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`product/${product._id}`}>
            <img className="img_carousel" src={product.image} alt={product.name} />
            <h3>
              {product.name} ({product.price})
            </h3>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
