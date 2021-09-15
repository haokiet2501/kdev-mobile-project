export const userLoginReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case _REQUEST:
        return { loading: true, products: [] };
      case _SUCCESS:
        return { loading: false, products: action.payload };
      case _FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };