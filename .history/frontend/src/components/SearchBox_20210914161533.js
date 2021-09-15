import React, { useState } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = () => {};
  return (
    <>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập tìm kiếm..."
          />
          <button type='submit'> </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
