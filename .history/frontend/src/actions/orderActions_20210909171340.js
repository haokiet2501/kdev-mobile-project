import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../contants/orderContants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type:ORDER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type:ORDER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type:ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
