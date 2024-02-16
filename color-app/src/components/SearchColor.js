import React from "react";

const SearchColor = ({ color, setColor }) => {
  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

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
