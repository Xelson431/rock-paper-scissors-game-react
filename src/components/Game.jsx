import Nav from "./Nav";
import Step from "./Step";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrementStep, reset } from "../slices/stepSlice";

function Game() {
  const { step } = useSelector((state) => state.step);
  const dispatch = useDispatch();
  const { choice } = useSelector((state) => state.choice);
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-center scale-50 h-96 ">
        <Step />
      </div>
      <div className="flex flex-col">
        <button onClick={() => dispatch(incrementStep())}>Increment</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <h1 className="text-black self-center">{step}</h1>
      </div>
    </>
  );
}

export default Game;
