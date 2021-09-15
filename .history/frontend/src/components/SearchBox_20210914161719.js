import React, { useState } from "react";

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
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập tìm kiếm..."
          />
          <button type='submit'>Tìm kiếm</button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
