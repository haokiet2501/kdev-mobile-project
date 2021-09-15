import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../contants/productContants";

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    if(successCreate) {
        history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
        dispatch(listProducts())
    }

  }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct]);

  const deleteHandler = (id) => {
    if (window.confirm("Bạn chắc chắn chứ?")) {
      // delete products
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = (product) => {
    // Create Products
  };

  return (
    <>
      <div className="productlist_row">
        <div className="product_list-text">
          <h1>Sản phẩm</h1>
        </div>
        <div>
          <button className="productlist-btn" onClick={createProductHandler}>
            Thêm sản phẩm
          </button>
        </div>
      </div>
      {loadingDelete && <Loader />}
      {errorDelete && <Message>{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá bán</th>
              <th>Danh mục sản phẩm</th>
              <th>Thương hiệu</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <Link to={`/admin/product/${product._id}/edit`}>
                    <button
                      className="btn_details"
                      style={{ marginRight: "5px" }}
                    >
                      <i className="bx bx-edit-alt"></i>
                    </button>
                  </Link>
                  <button
                    className="btn_details"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProductListScreen;
