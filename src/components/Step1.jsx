import Rock from "../assets/icon-rock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Triangle from "../assets/bg-triangle.svg";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";
function Step1() {
  return (
    <>
      <div className=" w-14  self-center ">
        {/* <div className="absolute w-24 ">
          <img src={Triangle} />
        </div> */}
        <div className="flex flex-row gap-7 justify-center">
          <img src={Rock} />
          <img src={Paper} />
        </div>

        <div className="flex flex-col justify-center">
          <img src={Scissors} />
        </div>
      </div>
    </>
  );
}
export default Step1;
