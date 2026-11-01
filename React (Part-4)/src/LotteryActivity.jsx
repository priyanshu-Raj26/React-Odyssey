import { useState } from "react";
import { genRandom, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genRandom(3));
  let iswinning = sum(ticket) === 15;

  const getTicket = () => {
    setTicket(genRandom(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1> <br />
      <div className="ticket">
        {iswinning ? (
          <h2>Lottery 'Congratulatoins, You Won!'</h2>
        ) : (
          <h2>Lottery!</h2>
        )}

        <h5>
          Lottery Ticket = <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </h5>
      </div>
      <br />
      <button onClick={getTicket}>Get New Ticket</button>
    </div>
  );
}
