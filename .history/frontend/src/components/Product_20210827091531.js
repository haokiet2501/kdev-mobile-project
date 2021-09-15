import React from 'react'

const Product = ({product}) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}>
                    <img />
                </a>
            </div>
        </>
    )
}

export default Product
