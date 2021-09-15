import React, { useEffect } from "react";
import "../css/ProductScreen.css";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  return (
    <>
      <Link to="/">
        <button className="button">
          <i class="bx bx-arrow-back" />
        </button>
      </Link>

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
          <div className="descript_product-detail">
            Bài viết đánh giá: {product.description}
          </div>
        </div>

        <div className="border_cart">
          <div className="border_title">Giá bán: </div>
          <div className="border_price">${product.price}</div>
          <div className="border_underline"></div>
          <div className="border_title1">Trạng thái: </div>
          <div className="border_status">
            {product.countInStock > 0 ? "Còn Hàng" : "Hết Hàng"}
          </div>
          <div className="border_underline"></div>

          <div className="button_cart">
            <button className="btn" disabled={product.countInStock === 0}>
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
