import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

//   const deleteHandler = (id) => {
//     if(window.confirm('Bạn chắc chắn chứ?')) {
//     // delete products
//     }
//   };

  return (
    <>
        <div className="productlist_row">
            <div className="product_list-text">
                <h1>Sản phẩm</h1>
            </div>
        </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>

          {/* <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a style={{ color: "#333" }} href={`mailto:${user.email}`}>
                    {user.email}
                  </a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="bx bx-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="bx bx-x" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/admin/user/${user._id}/edit`}>
                    <button
                      className="btn_details"
                      style={{ marginRight: "5px" }}
                    >
                      <i className="bx bx-edit-alt"></i>
                    </button>
                  </Link>
                  <button
                    className="btn_details"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      )}
    </>
  );
};

export default ProductListScreen;
