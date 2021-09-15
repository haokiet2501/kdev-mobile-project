import React from 'react'
import '../css/Product.css'

const Product = ({ product, index }) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <img src={product.image} alt="Hình ảnh sản phẩm"/>
                </a>
            </div>
        </>
    )
}

export default Product
