import React from 'react'
import products from '../products'
import '../css/HomeScreen.css'

const HomeScreen = () => {
    return (
        <>
           <h1 className='title'>Sản phẩm</h1> 
           <div className='row_home'>
               <div className='col_home'>
                   {products.map(product => (
                        <h3>{product.name}</h3>
                   ))}
               </div>
           </div>
        </>
    )
}

export default HomeScreen
