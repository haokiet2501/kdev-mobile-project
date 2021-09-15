import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/RegisterScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
   
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
   
  };

  return (
    <>
      <Link to="/">
        <button className="button">
          <i className="bx bx-arrow-back" />
        </button>
      </Link>
      <div className="register">
        <h1>Sửa Hồ Sơ</h1>
        {loading ? <Loader /> : error ? <Message>{error}</Message> : (

        )}
        
      </div>
    </>
  );
};

export default UserEditScreen;
