import Nav from "./Nav";
import Step1 from "./Step1";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";
import { useState } from "react";
import React from "react";
function Game() {
  const steps = [0, 1, 2, 3];
  const [currentStep, setCurrentStep] = useState(0);

  const StartGame = () => {
    setCurrentStep((prev) => (prev < 4 ? prev + 1 : setCurrentStep(0)));
    console.log(currentStep);
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col">
        <Step1 />
      </div>
    </>
  );
}

export default Game;
