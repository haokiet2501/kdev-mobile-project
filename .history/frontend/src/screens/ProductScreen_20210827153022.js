import React from 'react'
import '../css/ProductScreen.css'
import { Link } from 'react-router-dom'
import products from '../products'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            <div className="button">
                <Link to="/">
                    <button>
                        <i class='bx bx-arrow-back' />
                    </button>
                </Link>
            </div>

            <div className="product_main">
                i
            </div>
        </>
    )
}

export default ProductScreen
