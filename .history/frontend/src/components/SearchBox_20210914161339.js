import React, { useState } from 'react'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    return (
        <>
            <div className="search">
                <form onSubmit={submitHandler}>
                    <input />
                    <button></button>
                </form>
            </div>   
        </>
    )
}

export default SearchBox
