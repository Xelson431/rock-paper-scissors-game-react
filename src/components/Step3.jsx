import Triangle from "../assets/bg-triangle.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, decrementScore } from "../slices/scoreSlice";
function Step3() {
  const { choice } = useSelector((state) => state.choice);
  const dispatch = useDispatch();
  const ComputerChoices = ["Rock", "Paper", "Scissors"];
  const pickRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * ComputerChoices.length);
    return ComputerChoices[randomIndex];
  };

  const ComputerChoice = pickRandomElement();

  function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
      dispatch(incrementScore());

      return "You win!";
    } else {
      dispatch(decrementScore());

      return "Computer wins!";
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1>
          {choice} <b>VS</b> {ComputerChoice}
        </h1>
      </div>
      <div>
        <h3>
          <b>{compareChoices(choice, ComputerChoice)}</b>
        </h3>
      </div>
    </>
  );
}
export default Step3;
