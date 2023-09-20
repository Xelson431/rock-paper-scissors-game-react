import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, reset } from "../slices/scoreSlice";
function Nav() {
  const { score } = useSelector((state) => state.score);

  return (
    <>
      <div className=" grid grid-cols-1 p-10 place-items-center  ">
        <div className="navbar outline outline-slate-400 rounded-md p-5 max-w-4xl  m-5  ">
          <div className="flex-1">
            <img src={logo} />
          </div>
          <div className="flex-none">
            <div className="flex flex-col text-center bg-white p-14 text-2xl text-black rounded-lg">
              <h3>SCORE</h3>
              <h1 className="font-sans font-extrabold text-5xl font">
                {score}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
