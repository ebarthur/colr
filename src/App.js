import React from "react";
import ColorCard from "./components/ColorCard";
import SearchColor from "./components/SearchColor";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <ColorCard color={color} />
      <SearchColor color={color} handleInputChange={handleInputChange} />
    </div>
  );
};

export default App;
