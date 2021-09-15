import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/CartScreen.css'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    console.log(qty);

    return (
        <div className="cart_row">
            <div>
                <h1>Giỏ Hàng</h1>
                {cartItems.length === 0 ? <Message>Giỏ hàng của bạn trống <Link to="/"><div class>Trở về</div></Link></Message> : (
                    <div></div>
                )}
            </div>   
            <div>alo</div>   
            <div>alo</div>   
        </div>
    )
}

export default CartScreen