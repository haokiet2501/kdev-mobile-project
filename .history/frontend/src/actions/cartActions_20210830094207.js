import axios from 'axios'
import { CART_ADD_ITEM } from '../contants/cartContants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch
}