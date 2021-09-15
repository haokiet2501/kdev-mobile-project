import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
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
      <Carousel au autoPlaySpeed={2000}>
        {products.map((product) => (
          <div key={product._id}>
            <div className="card">
              <Link style={{textAlign: "center"}} to={`/product/${product._id}`}>
                <img
                  className="img_caroucel"
                  src={product.image}
                  alt={product.name}
                />
                <h3 className="text_center">
                  {product.name} (${product.price})
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
