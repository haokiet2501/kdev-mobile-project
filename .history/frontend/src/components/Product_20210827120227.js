import React from 'react'
import '../css/Product.css'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <img src={product.image} className='img_card' alt="Hình ảnh sản phẩm"/>
                </a>

                <div className='title'>
                    <a href={`/product/${product._id}`}>
                        <strong className='title_name'>{product.name}</strong>
                    </a>

                    <div className='rating'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>

                    <div className='price_product'>
                        ${product.price}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product
