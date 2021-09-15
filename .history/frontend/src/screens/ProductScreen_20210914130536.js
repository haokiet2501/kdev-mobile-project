import React, { useState, useEffect } from "react";
import "../css/ProductScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../contants/productContants";

const ProductScreen = ({ history, match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { success: successProductReview, error: errorProductReview } = productCreateReview
  
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
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

              <span className="border_contants-three">
                {product.countInStock > 0 && (
                  <div className="border_qty-main">
                    <div className="border_qty">Số lượng:</div>
                    <div className="border_select">
                      <select
                        className="select-box"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </span>

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

          <div>
            <div className="productreview">
              <h2>Đánh giá</h2>
              {product.reviews.length === 0 && (
                <Message>Không có đánh giá.</Message>
              )}
              <div className="review">
                {product.reviews.map((review) => (
                  <div key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
                <div>
                  {errorProductReview && (
                    <Message>{errorProductReview}</Message>
                  )}
                  <h3>Đánh giá điện thoại {product.name}</h3>
                  {userInfo ? (
                    <form onSubmit={submitHandler}>
                      <div className="review-item">
                        <div className="review-center">
                          <label>Xếp hạng</label>
                          <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Chọn...</option>
                            <option value="1">1 - Rất tệ</option>
                            <option value="2">2 - Tệ</option>
                            <option value="3">3 - Bình thường</option>
                            <option value="4">4 - Tốt</option>
                            <option value="5">5 - Rất tốt</option>
                          </select>
                        </div>
                      </div>
                      <div className="review-item">
                        <label>Viết đánh giá</label>
                        <div className="productreview_textarea">
                          <textarea
                            rows="5"
                            cols="60"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                        </div>
                      </div>
                      <button className="btn-review" type="submit">
                        Gửi đánh giá
                      </button>
                    </form>
                  ) : (
                    <Message disabled>
                      Vui lòng <Link to="/login">Đăng nhập</Link> để viết đánh
                      giá
                    </Message>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
