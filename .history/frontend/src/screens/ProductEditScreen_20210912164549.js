import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductEditScreen.css";
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
      <div className="productedit" style={{ marginTop: "35px" }}>
        <h1>Sửa Sản Phẩm</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <form onSubmit={submitHandler}>
            <div className="productedit_field">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span></span>
              <label>Tên sản phẩm</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span></span>
              <label>Giá bán</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <span></span>
              <label>Hình ảnh (URL)</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <span></span>
              <label>Thương hiệu</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
              <span></span>
              <label>Số lượng</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span></span>
              <label>Danh mục sản phẩm</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span></span>
              <label>Mô tả sản phẩm</label>
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
