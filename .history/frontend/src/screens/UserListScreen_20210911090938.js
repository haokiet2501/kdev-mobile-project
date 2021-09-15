import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers } from "../actions/userActions";

const UserListScreen = () => {
    const dispatch = useDispatch()

    userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch])

    return (
        <>
            <div className="userlist_main">
                {loading ? <Loader /> : error ? <Message>{error}</Message> : (
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
                            {users.map()}
                            <tr>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>   
        </>
    )
}

export default UserListScreen
