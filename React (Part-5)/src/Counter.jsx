import { useState, useEffect } from "react";

export default function Counter() {
  let [counterX, setCounterX] = useState(0);
  let [counterY, setCounterY] = useState(0);

  const handleClickX = () => {
    setCounterX((prevCount) => prevCount + 1);
  };

  const handleClickY = () => {
    setCounterY((prevCount) => prevCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("This is the Side Effect");
    },
    [counterX, counterY],
  );

  return (
    <div>
      <h2>Counter_X = {counterX}</h2>
      <button onClick={handleClickX}>+ counter</button>

      <h2>Counter_Y = {counterY}</h2>
      <button onClick={handleClickY}>+ counter</button>
    </div>
  );
}
