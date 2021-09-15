import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/ProfileScreen.css'
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers } from "../actions/userActions";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin) {
        dispatch(listUsers());
    } else {
        history.push('/login')
    }
  }, [dispatch, history]);

  const deleteHandler = () => {
    console.log('delete');
  }

  return (
    <>
      <div className="userlist_main">
        <h1></h1>
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

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a style={{color: '#333'}} href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i className="bx bx-check" style={{ color: "green" }}></i>
                    ) : (
                      <i className="bx bx-x" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/user/${user._id}/edit`}>
                      <button className="btn_details" style={{marginRight: "5px"}}>
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
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserListScreen;
