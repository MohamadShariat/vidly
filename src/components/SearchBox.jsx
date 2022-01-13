import React from "react";

const SearchBox = ({ value, onPageChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onPageChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
