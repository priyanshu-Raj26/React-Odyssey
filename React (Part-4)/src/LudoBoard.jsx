import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 }); //object as state
  let [arr, setarr] = useState([""]); //Arrays as state

  const updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    setarr((prevArr) => {
      console.log(arr);
      return [...prevArr, " blue moved"];
    });
  };

  const updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  const updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  const updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  return (
    <div>
      <h1>Game Begins!</h1>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
      </div>
    </div>
  );
}
