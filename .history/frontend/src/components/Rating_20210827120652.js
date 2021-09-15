import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <>
            <span>
                <i className={value >= 1 ? 'bx bxs-star' : value >= 1.5 ? 'bx bxs-star-hafl'}></i>
            </span>
        </>
    )
}

export default Rating
