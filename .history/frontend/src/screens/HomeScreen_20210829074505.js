import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/HomeScreen.css'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <>
           <h1 className='title_home'>Sản phẩm</h1> 
           
           <div className='row_home'>
               <div className='col_home'>
                   {products.map(product => (
                        <Product key={product._id} product={product} />
                   ))}
               </div>
           </div>
        </>
    )
}

export default HomeScreen
