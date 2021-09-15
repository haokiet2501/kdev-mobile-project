import React, { useState } from 'react'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = () => {

    }
    return (
        <>
            <div className="search">
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={(e) => setKeyword(e.target.)} />
                    <button></button>
                </form>
            </div>   
        </>
    )
}

export default SearchBox
