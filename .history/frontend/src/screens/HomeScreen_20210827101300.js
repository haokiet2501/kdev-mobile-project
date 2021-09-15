import React from 'react'
import products from '../products'
import '../css/HomeScreen.css'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
           <h1 className='title_home'>Sản phẩm</h1> 
           <div className='row_home'>
               <div className='col_home>
                   {products.map(product => (
                        <Product product={product} />
                   ))}
               </div>
           </div>
        </>
    )
}

export default HomeScreen
