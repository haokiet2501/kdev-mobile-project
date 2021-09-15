import React, { useState, useEffect } from "react";
import "../css/ProductScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = ({ history, match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link to="/">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
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
                text={`${product.numReviews} Đánh Giá`}
              />
            </div>
            <div className="border_product-detail"></div>
            <div className="price_product-detail">
              Giá bán: ${product.price}
            </div>
            <div className="border_product-detail"></div>
            <div className="descript_product-detail">
              Bài viết đánh giá: {product.description}
            </div>
          </div>

          <div>
            <div className="border_cart">
              <div className="border_main">
                <span className="border_title">Giá bán:</span>
                <span className="border_contants">${product.price}</span>
              </div>

              <div className="border_main">
                <span className="border_title">Trạng thái:</span>
                <span className="border_contants-two">
                  {product.countInStock > 0 ? "Còn Hàng" : "Hết Hàng"}
                </span>
              </div>

              <div className="border_main">
                <span className="border_title">Trạng thái:</span>
                <span className="border_contants-three">
                  
                </span>
              </div>
              
              <div className="button_cart">
                <button
                  onClick={addToCartHandler}
                  className="btn"
                  disabled={product.countInStock === 0}
                >
                  Thêm Giỏ Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
