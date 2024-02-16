import React from "react";

const ColorCard = ({ color }) => {
  const displayColor = color ? color : "Empty Value";
  return (
    <div className="colorCard" style={{ backgroundColor: color }}>
      {displayColor}
    </div>
  );
};

export default ColorCard;
