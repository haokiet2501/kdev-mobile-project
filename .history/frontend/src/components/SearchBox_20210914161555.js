import React, { useState } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
      e.preventDefault()
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
