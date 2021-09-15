import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/CartScreen.css'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const qty = location.search ? location.search.split('=')

    console.log(qty);

    return (
        <>
            Cart   
        </>
    )
}

export default CartScreen
