import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [dispatch, history, productId, product]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch Update Product
    
  };

  return (
    <>
      <Link to="/admin/product">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      <div className="register" style={{ marginTop: "35px" }}>
        <h1>Sửa Sản Phẩm</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <form onSubmit={submitHandler}>
            <div className="register_field">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span></span>
              <label>Tên đăng nhập</label>
            </div>

            <div className="register_field">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span></span>
              <label>Tên email</label>
            </div>

            <div className="checked">
              <input
                className="input-check"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <label>isAdmin</label>
            </div>

            <button
              type="submit"
              style={{ marginBottom: "20px" }}
              className="btn_register"
            >
              Cập nhật
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProductEditScreen;
