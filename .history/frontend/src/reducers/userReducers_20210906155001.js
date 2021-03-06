import { USER_LOGIN_REQUEST } from "../contants/userContants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true, products: [] };
      case USER_LOGIN_SUCCESS:
        return { loading: false, products: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };