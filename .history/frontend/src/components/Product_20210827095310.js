import React from 'react'
import '../css/Product.css'

const Product = ({ product }) => {
    return (
        <>
            <div className='card_product' key={product._id}>
                <a href={`/product/${product._id}`}>
                    <img src={product.image} />
                </a>
            </div>
        </>
    )
}

export default Product
