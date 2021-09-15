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
                {loading ?}
            </div>   
        </>
    )
}

export default UserListScreen
