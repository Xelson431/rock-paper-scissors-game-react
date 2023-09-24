import Rock from "../assets/icon-rock.webp";
import Paper from "../assets/icon-paper.webp";
import Scissors from "../assets/icon-scissors.webp";
import Triangle from "../assets/bg-triangle.svg";
import { useDispatch, useSelector } from "react-redux";
import { choose } from "../slices/choiceSlice";
import { incrementStep } from "../slices/stepSlice";
function Step1() {
  const { choice } = useSelector((state) => state.choice);
  const dispatch = useDispatch();
  const handleChoiceClick = (altText) => {
    dispatch(choose(altText));
    dispatch(incrementStep());
  };

  console.log(choice);
  return (
    <>
      <div className="  flex flex-col items-center self-center imgContainer  scale-125 mt-7 ">
        <div className="flex flex-row gap-40 justify-center z-50">
          <div className="Rock-Border  bg-white">
            <div className="bgwhite ">
              <img
                src={Rock}
                className=""
                alt="Rock"
                onClick={(e) => {
                  handleChoiceClick(e.target.alt);
                }}
              />
            </div>
          </div>
          <div className="Paper-Border">
            <div className="bgwhite">
              <img
                src={Paper}
                alt="Paper"
                className="Paper"
                onClick={(e) => {
                  handleChoiceClick(e.target.alt);
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center  z-50">
          <div className="Scissors-Border">
            <div className="bgwhite">
              <img
                src={Scissors}
                alt="Scissors"
                className="Scissors"
                onClick={(e) => {
                  handleChoiceClick(e.target.alt);
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-48 scale-125 z-10">
          <img src={Triangle} />
        </div>
      </div>
    </>
  );
}
export default Step1;
