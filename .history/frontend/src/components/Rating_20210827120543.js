import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <>
            <span>
                <i className={value }></i>
            </span>
        </>
    )
}

export default Rating
