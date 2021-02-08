import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button";
const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "pink",
  "grey",
  "white",
  "cyan",
  "beige",
  "brown",
  "teal",
  "aquamarine",
];

const styles = {
  "text-align": "center",
  padding: "10px",
};
function App() {
  const [clicked, setClicked] = useState([]);
  //function to handle the clicking of a button
  const handleClick = (color) => {
    //what got clicked?
    if (clicked.includes(color)) return handleLose();
    if (clicked.length === colors.length - 1) return handleWin();
    setClicked([...clicked, color]);
  };
  const handleWin = () => {
    setClicked([]);
    alert("YOU WIN!");
  };
  const handleLose = () => {
    setClicked([]);
    alert("YOU LOSE");
  };
  return (
    <>
      <div className="jumbotron">
        <h1 style={{ textAlign: "center" }}>MEMORY GAME! - Do You Remember?</h1>
        <p style={styles}>
          Instructions: Click on each color ONCE! Choose a color twice and you
          lose! Survive until no more colors and you win!
        </p>
        <h3>
          You clicked on colors -{" "}
          {clicked.map((color) => (
            <button className="btn btn-sm btn-primary">{color}</button>
          ))}
        </h3>
      </div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        {colors
          .sort(() => Math.random() - 0.5)
          .map((color) => (
            <Button click={handleClick} color={color} />
          ))}
      </div>
    </>
  );
}
export default App;
