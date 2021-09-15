import React from "react";
import "../css/Product.css";
import Rating from "./Rating";
import { Router, Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Router>
      <div className="card_product">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            className="img_card"
            alt="Hình ảnh sản phẩm"
          />
        </Link>

        <div className="title">
          <Link to={`/product/${product._id}`}>
            <strong className="title_name">{product.name}</strong>
          </Link>

          <div className="rating">
            <Rating 
              value={product.rating}
              text={`${product.numReviews} đánh giá`}
            />
          </div>

          <div className="price_product">${product.price}</div>
        </div>
      </div>
    </Router>
  );
};

export default Product;
