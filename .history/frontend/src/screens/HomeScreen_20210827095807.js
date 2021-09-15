import React from 'react'
import products from '../products'
import '../css/HomeScreen.css'
import Product from '../components/Product'
import product from '../products'

const HomeScreen = () => {
    return (
        <>
           <h1 className='title_home'>Sản phẩm</h1> 
               <div key={product._id} className='col_home'>
                   {products.map((product) => (
                        <Product product={product}/>
                   ))}
               </div>
        </>
    )
}

export default HomeScreen
