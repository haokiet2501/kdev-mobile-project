import React from "react";
import "../css/Product.css";
import Rating from "./Rating";
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <>
      <div className="card_product">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            className="img_card"
            alt={product.name}
          />
        </Link>

        <div className="title">
          <Link to={`/product/${product._id}`}>
            <strong className="title_name">{product.name}</strong>
          </Link>

          <div className="rating">
            <Rating 
              value={product.rating}
              text={`${product.numReviews} Đánh Giá`}
            />
          </div>

          <div className="price_product">${product.price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
