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
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.ProducReview);
  const { success: successProductReview, error: errorProductReview } =
    createProductReview;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(match.params.id, {
      rating,
      comment
    }))
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
                text={`${product.numReviews} ????nh Gi??`}
              />
            </div>
            <div className="border_product-detail"></div>
            <div className="price_product-detail">
              Gi?? b??n: ${product.price}
            </div>
            <div className="border_product-detail"></div>
            <div className="descript_product-detail">
              B??i vi???t ????nh gi??: {product.description}
            </div>
          </div>

          <div>
            <div className="border_cart">
              <div className="border_main">
                <span className="border_title">Gi?? b??n:</span>
                <span className="border_contants">${product.price}</span>
              </div>

              <div className="border_main">
                <span className="border_title">Tr???ng th??i:</span>
                <span className="border_contants-two">
                  {product.countInStock > 0 ? "C??n H??ng" : "H???t H??ng"}
                </span>
              </div>

              <span className="border_contants-three">
                {product.countInStock > 0 && (
                  <div className="border_qty-main">
                    <div className="border_qty">S??? l?????ng:</div>
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
                  Th??m Gi??? H??ng
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="productreview">
              <h2>????nh gi??</h2>
              {product.reviews.length === 0 && (
                <Message>Kh??ng c?? ????nh gi??.</Message>
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
                  {errorProductReview && (<Message>{errorProductReview}</Message>)}
                  <h3>????nh gi?? ??i???n tho???i {product.name}</h3>
                  {userInfo ? (
                    <form onSubmit={submitHandler}>
                      <div className="review-item">
                        <div className="review-center">
                          <label>X???p h???ng</label>
                          <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Ch???n...</option>
                            <option value="1">1 - R???t t???</option>
                            <option value="2">2 - T???</option>
                            <option value="3">3 - B??nh th?????ng</option>
                            <option value="4">4 - T???t</option>
                            <option value="5">5 - R???t t???t</option>
                          </select>
                        </div>
                      </div>
                      <div className="review-item">
                        <label>Vi???t ????nh gi??</label>
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
                        G???i ????nh gi??
                      </button>
                    </form>
                  ) : (
                    <Message disabled>
                      Vui l??ng <Link to="/login">????ng nh???p</Link> ????? vi???t ????nh
                      gi??
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
