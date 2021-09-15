import React from 'react'
import '../css/Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <svg>
                <circle cx="50" cy="50" r="35"></circle>
            </svg>
        </div>
    )
}

export default Loader
