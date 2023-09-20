import Rock from "../assets/icon-rock.webp";
import Paper from "../assets/icon-paper.webp";
import Scissors from "../assets/icon-scissors.webp";
import Triangle from "../assets/bg-triangle.svg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, decrementScore } from "../slices/scoreSlice";
function Step2() {
  const { choice } = useSelector((state) => state.choice);
  const dispatch = useDispatch();

  const choiceImages = {
    Rock: Rock,
    Paper: Paper,
    Scissors: Scissors,
  };

  const CurrentChoiceSvg = choiceImages[choice];

  return (
    <>
      <div className="flex flex-col  items-center scale-150">
        <div className="flex flex-row gap-40  ">
          <div className="flex flex-col items-center gap-32">
            <div className="flex flex-col items-center">
            <span className="text-5xl">You</span>
            <span className="text-5xl">
            Picked
            </span>
            </div>
            <div className="imgContainer">
              <div className="Paper-Border">
                <div className="bgwhite">
                  <div className="placeholderCircle">
                    {CurrentChoiceSvg && <img src={CurrentChoiceSvg} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-32 whitespace-pre-line ">
            <div className="flex flex-col items-center">
            <span  className="text-5xl ">The House 
            </span>
            <span className="text-5xl">
            Picked
            </span>
            </div>
            <div className="imgContainer">
              <div className="Paper-Border">
                <div className="bgwhite">
                  <div className="placeholderCircle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step2;