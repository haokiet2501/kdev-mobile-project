import React from 'react'
import 
const Product = ({product}) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <img src={product.image} />
                </a>
            </div>
        </>
    )
}

export default Product
