import React from 'react'

const Product = ({product}) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <img src={} />
                </a>
            </div>
        </>
    )
}

export default Product
