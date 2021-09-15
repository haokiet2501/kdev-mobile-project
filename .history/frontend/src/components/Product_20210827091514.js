import React from 'react'

const Product = ({product}) => {
    return (
        <>
            <div className='card_product'>
                <a href={`/product/${product._id}`}></a>
            </div>
        </>
    )
}

export default Product
