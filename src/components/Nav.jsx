import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
function Nav() {
  const { score } = useSelector((state) => state.score);

  return (
    <>
      <div className=" grid place-items-center  ">
        <div className="flex flex-row gap-96  outline outline-slate-400 rounded-2xl p-5 max-w-7xl  m-5  ">
          <img src={logo} width={215} />
          <div className="flex-none">
            <div className="flex flex-col text-center bg-white p-6 text-2xl  text-black rounded-lg">
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
