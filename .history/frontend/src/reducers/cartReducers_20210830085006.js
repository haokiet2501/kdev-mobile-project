import { CART_ADD_ITEM } from "../contants/cartContants";

export const cartReducer = (state = {cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if(existItem) {

            } else {
                return {
                    ...state,
                    cartI
                }
            }
        default: 
            return state
    }
}