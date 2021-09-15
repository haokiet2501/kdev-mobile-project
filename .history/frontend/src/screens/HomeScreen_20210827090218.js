import React from 'react'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
           <h1>Sản phẩm</h1> 
           <div className='row_home'>
               <div className='col_home'>
                   {product}
               </div>
           </div>
        </>
    )
}

export default HomeScreen
