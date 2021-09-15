import React, { useState } from 'react'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    return (
        <>
            <div className="search">
                <form>
                    <input />
                    <button></button>
                </form>
            </div>   
        </>
    )
}

export default SearchBox
