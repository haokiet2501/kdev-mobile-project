import React from 'react'
import '../css/ProductScreen.css'
import { Link } from 'react-router-dom'
const ProductScreen = () => {
    return (
        <>
            <div className="button">
                <button>
                    <Link to='/'><i class='bx bx-arrow-back' /></Link>
                </button>
            </div>
        </>
    )
}

export default ProductScreen
