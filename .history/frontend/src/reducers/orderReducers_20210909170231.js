import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../contants/orderContants";

export const orderCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                
            }
        default:
            return state
    }
}