import { useState } from "react";
import { getRolls, sum } from "./utils";
import "./Lucky7.css";
import Dice from "./Dice";
import Button from "./Button";

function Lucky7({target = 7, numDice = 2, winCheck}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const won = winCheck(dice);
  console.log(dice);
  function roll() {
    setDice(getRolls(numDice));
  }

  return (
    <main className="Lucky7">
      <h1>Lucky{target} {won && "You won!"}</h1>
      <Dice dice={dice} color={"blue"}/>
      {/* <button onClick={roll}>Roll Again!</button> */}
      <Button clickFunc={roll} label="Re-Roll"/>
    </main>
  );
}

export default Lucky7;
