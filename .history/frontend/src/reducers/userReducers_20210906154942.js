export const userLoginReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case USER_LOGI_REQUEST:
        return { loading: true, products: [] };
      case USER_LOGI_SUCCESS:
        return { loading: false, products: action.payload };
      case USER_LOGI_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };