import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/CartScreen.css";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  console.log(qty);

  return (
    <div className="cart_row">
      <div>
        <h1>Giỏ Hàng</h1>
        {cartItems.length === 0 ? (
          <Message>
            Giỏ hàng của bạn trống{" "}
            <Link to="/">
              <span className="message_back">Trở về</span>
            </Link>
          </Message>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart_main" key={item.product}>
                <div className="cart_row-title">
                  <div>
                    <img
                      className="image_cart"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div>
                    <div className="cart_text">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                  </div>

                  <div>
                    <div className="cart_price">${item.price}</div>
                  </div>

                  <div>
                    <div className="border_select">
                      <select
                        className="select-box"
                        value={qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                      <button className="cart_icon" type="button" onClick={() => }>
                        <i className='bx bxs-trash'></i>
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div>alo</div>
      <div>alo</div>
    </div>
  );
};

export default CartScreen;
