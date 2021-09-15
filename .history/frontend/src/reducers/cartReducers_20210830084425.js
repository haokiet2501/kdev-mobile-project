import { CART_ADD_ITEM } from "../contants/cartContants";

export const cartReducer = (state = {cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
        default: 
            return state
    }
}