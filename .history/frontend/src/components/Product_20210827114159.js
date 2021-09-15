import React from 'react'
import '../css/Product.css'

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
                        {product.rating} from {product.numReviews} reviews
                    </div>

                    <div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product
