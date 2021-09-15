import React, { useState, useEffect } from 'react'
import '../css/HomeScreen.css'
import Product from '../components/Product'

const HomeScreen = () => {
    const [products, setProducts] = ([])

    u
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
