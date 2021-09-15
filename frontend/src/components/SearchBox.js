import React, { useState } from "react";
import '../css/SearchBox.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
      e.preventDefault()
      if(keyword.trim()) {
          history.push(`/search/${keyword}`)
      } else {
          history.push('/')
      }
  };
  return (
    <>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            className="search-input"
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập tìm kiếm..."
          />
          <button className="search-btn" type='submit'><i className='bx bx-search'></i></button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
