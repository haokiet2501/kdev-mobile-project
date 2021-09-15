import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProfileScreen.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
        if(!user.name) {
            dispatch(getUserDetails('profile'))
        } else {
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    //   dispatch register
    if(password !== confirmPassword) {
        setMessage('Mật khẩu không khớp')
    } else {
        // dispatch update profile
    }
  };

  return (
    <div className="profile_col">
        <div></div>

        <div>My order</div>
      </div>
    </div>
  );
};

export default ProfileScreen;
