import Triangle from "../assets/bg-triangle.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, decrementScore } from "../slices/scoreSlice";
import { reset } from "../slices/stepSlice";
import Rock from "../assets/icon-rock.webp";
import Paper from "../assets/icon-paper.webp";
import Scissors from "../assets/icon-scissors.webp";
import { motion } from "framer-motion";

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
                <div className="bgwhite slightRotate">
                  {CurrentChoiceSvg && <img src={CurrentChoiceSvg} />}
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-14 mt-52 h-96 text-5xl   text-center">
            <motion.button
              className="btn bg-slate-50 w-96 hover:text-red-400 text-black p-4 rounded-lg"
              onClick={() => dispatch(reset())}
              key={0}
              initial={{ opacity: 0, y: "-100px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ delay: 0.5 }}
            >
              PLAY AGAIN
            </motion.button>
            <motion.h1
              key={0}
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ delay: 0.2 }}
            >
              <b>{compareChoices(choice, ComputerChoice)}</b>
            </motion.h1>
          </div>

          <div className="flex flex-col items-center gap-32 whitespace-pre-line ">
            <div className="flex flex-col items-center">
              <span className="text-5xl ">The House</span>
              <span className="text-5xl">Picked</span>
            </div>
            <motion.div
              className="imgContainer"
              key={0}
              initial={{ opacity: 0, rotate: 90, y: "-130px" }}
              animate={{ opacity: 1, rotate: 0, y: "0px" }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="Rock-Border">
                <div className="bgwhite invertImage ">
                  {ComputerChoiceSvg && (
                    <img className="" src={ComputerChoiceSvg} />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step3;
