import React from 'react'
import products from '../products'

const HomeScreen = () => {
    return (
        <>
           <h1>Sản phẩm</h1> 
           <div className='row_home'>
               <div className='col_home'>
                   {products.mao}
               </div>
           </div>
        </>
    )
}

export default HomeScreen
