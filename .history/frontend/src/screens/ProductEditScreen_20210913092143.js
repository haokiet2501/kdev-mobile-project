import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductEditScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from '../contants/productContants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productlist')
    } else {
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
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch Update Product
    dispatch(updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock
    }))
  };

  return (
    <>
      <Link to="/admin/product">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      <div className="productedit">
        <h1>C???p Nh???t S???n Ph???m</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message>{errorUpdate}</Message>}
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
              <label>T??n s???n ph???m</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span></span>
              <label>Gi?? b??n</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <span></span>
              <label>H??nh ???nh (URL)</label>
            </div>

            <div className="productedit_field">
              <input
                type="file"
                onChange={uploadFileHandler}
              />
              <span></span>
              {uploading && <Loader />}
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <span></span>
              <label>Th????ng hi???u</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
              <span></span>
              <label>S??? l?????ng</label>
            </div>

            <div className="productedit_field">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span></span>
              <label>Danh m???c s???n ph???m</label>
            </div>

            <div className="productedit_textarea">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

            <button
              type="submit"
              style={{ marginBottom: "20px" }}
              className="btn_productedit"
            >
              C???p nh???t
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProductEditScreen;
