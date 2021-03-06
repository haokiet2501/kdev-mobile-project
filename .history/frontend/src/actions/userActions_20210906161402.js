import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../contants/userContants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
        type: USER_LOGIN_SUCCESS,
        
    })
  } catch (error) {}
};
