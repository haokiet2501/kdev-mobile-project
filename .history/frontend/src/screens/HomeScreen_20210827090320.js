import React from 'react'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
           <h1>Sản phẩm</h1> 
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
