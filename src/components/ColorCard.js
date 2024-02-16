import React from "react";

const ColorCard = ({ color }) => {
  const isBlack = color && color.toLowerCase() === "black";
  const textColor = isBlack ? "white" : "black";
  const displayColor = color ? color : "Empty Value";

  return (
    <div
      className="colorCard"
      style={{ backgroundColor: color, color: textColor }}
    >
      {displayColor}
    </div>
  );
};

export default ColorCard;
