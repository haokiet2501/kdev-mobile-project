import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers } from "../actions/userActions";

const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  const deleteHandler = () => {
    console.log('delete');
  }

  return (
    <>
      <div className="userlist_main">
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
                    <a href={`mailto:${user.email}`}>{user.email}</a>
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
                      <button className="btn-userlist">
                        <i className="bx bx-edit-alt"></i>
                      </button>
                    </Link>
                    <button
                      className="btn-userdelete"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className="bx bx-user-x"></i>
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
