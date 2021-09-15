import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <>
            <span>
                <i className={value >= 1 ? ''}></i>
            </span>
        </>
    )
}

export default Rating
