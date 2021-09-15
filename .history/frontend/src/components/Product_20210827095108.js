import React from 'react'
import '../css/Product.css'
const Product = ({product}) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <imgaes src={product.image} />
                </a>
            </div>
        </>
    )
}

export default Product
