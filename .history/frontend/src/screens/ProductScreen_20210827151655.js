import React from 'react'
import '../css/ProductScreen.css'
import { Link } from 'react-router-dom'
const ProductScreen = () => {
    return (
        <>
            <div className="button">
                <Link to="/">
                    <button>
                        <i class='bx bx-arrow-back' />
                    </button>
                    </Link>
            </div>
        </>
    )
}

export default ProductScreen
