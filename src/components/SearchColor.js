import React from "react";

const SearchColor = ({ color, handleInputChange }) => {
  return (
    <input
      type="text"
      role="searchbox"
      placeholder="Add color name"
      value={color}
      onChange={handleInputChange}
    />
  );
};

export default SearchColor;
