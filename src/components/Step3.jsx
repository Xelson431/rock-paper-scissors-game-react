import Triangle from "../assets/bg-triangle.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, decrementScore } from "../slices/scoreSlice";
import { reset } from "../slices/stepSlice";
import Rock from "../assets/icon-rock.webp";
import Paper from "../assets/icon-paper.webp";
import Scissors from "../assets/icon-scissors.webp";
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
      return "IT'S A TIE!";
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
      dispatch(incrementScore());
      return "YOU WIN";
    } else {
      dispatch(decrementScore());
      return "YOU LOSE";
    }
  }

  const choiceImages = {
    Rock: Rock,
    Paper: Paper,
    Scissors: Scissors,
  };

  const CurrentChoiceSvg = choiceImages[choice];
  const ComputerChoiceSvg = choiceImages[ComputerChoice];
  return (
    <>
      <div className="flex flex-col  items-center scale-150">
        <div className="flex flex-row gap-52  ">
          <div className="flex flex-col items-center gap-32">
            <div className="flex flex-col items-center">
              <span className="text-5xl">You</span>
              <span className="text-5xl">Picked</span>
            </div>
            <div className="imgContainer">
              <div className="Paper-Border">
                <div className="bgwhite">
                  {CurrentChoiceSvg && <img src={CurrentChoiceSvg} />}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-14 mt-52 h-96 text-5xl   text-center">
            <button
              className="btn bg-slate-50 w-96 hover:text-red-400 text-black p-4 rounded-lg"
              onClick={() => dispatch(reset())}
            >
              PLAY AGAIN
            </button>
            <h1>
              <b>{compareChoices(choice, ComputerChoice)}</b>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-32 whitespace-pre-line ">
            <div className="flex flex-col items-center">
              <span className="text-5xl ">The House</span>
              <span className="text-5xl">Picked</span>
            </div>
            <div className="imgContainer">
              <div className="Rock-Border">
                <div className="bgwhite">
                  {ComputerChoiceSvg && <img src={ComputerChoiceSvg} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step3;
