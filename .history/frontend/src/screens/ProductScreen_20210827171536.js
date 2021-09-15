import React from "react";
import "../css/ProductScreen.css";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <div className="button">
        <Link to="/">
          <button>
            <i class="bx bx-arrow-back" />
          </button>
        </Link>
      </div>

      <div className="product_main">
        <img
          className="img_product-detail"
          src={product.image}
          alt={product.name}
        />

        <div>
          <div className="text_product-detail">{product.name}</div>
          <div className="border_product-detail"></div>
          <div className="rating_product-detail">
            <Rating
              value={product.rating}
              text={`${product.numReviews} đánh giá`}
            />
          </div>
          <div className="border_product-detail"></div>
          <div className="price_product-detail">Giá bán: ${product.price}</div>
          <div className="border_product-detail"></div>
          <div className="descript_product-detail">Bài viết đánh giá: {product.description}</div>
        </div>

        <div className="border_cart">
            <div className="border_title">Giá bán: </div>
            <div className="border_price">${product.price}</div>
            <div className="border_underline"></div>
            <div className="border_title">Trạng thái: </div>
            <div className="border_status">{product.countInStock > 0 ? 'Còn Hàng'}</div>
            <div className="border_underline"></div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
