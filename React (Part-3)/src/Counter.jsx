import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(init); //initialization
  console.log("Component is rendered!");
  // console.log(`count = ${count}`);

  function incCount() {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    // console.log("inside incCount, count = ", count); // ❌ still shows OLD value here, not updated yet
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increse count</button>
    </div>
  );
}
