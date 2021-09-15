import React from 'react'
import products from '../products'
import '../css/HomeScreen.css'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
           <h1 className='title_home'>Sản phẩm</h1> 
           <div className='row_home'>
                {products.map((product) => (
            <Col key={product._id} sm={12} xl={3} lg={4} md={6}>
              <Product product={product} />
            </Col>
                ))}
           </div>
        </>
    )
}

export default HomeScreen
