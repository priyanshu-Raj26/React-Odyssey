import { useState } from "react";
import { genRandom, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genRandom(n));
  let iswinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genRandom(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1> <br />
      <h3>{iswinning && `'Congratulations, You Won!'`}</h3>
      <h6>
        <Ticket ticket={ticket} />
      </h6>
      <br />
      <Button action={buyTicket} />
    </div>
  );
}
