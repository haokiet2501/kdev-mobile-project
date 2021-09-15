import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers } from "../actions/userActions";

const UserListScreen = () => {
    const dispatch = useDispatch()

    userList = user

    return (
        <div>
            
        </div>
    )
}

export default UserListScreen
