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
            alt="Hình ảnh sản phẩm"
          />
        </Link>

        <div className="title">
          <Link href={`/product/${product._id}`}>
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
    </>
  );
};

export default Product;
