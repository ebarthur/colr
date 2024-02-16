import React from "react";
import ColorCard from "./components/ColorCard";
import SearchColor from "./components/SearchColor";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <ColorCard color={color} />
      <SearchColor color={color} setColor={setColor} />
    </div>
  );
};

export default App;
