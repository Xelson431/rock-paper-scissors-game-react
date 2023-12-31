import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function Nav() {
  const { score } = useSelector((state) => state.score);

  return (
    <>
      <motion.div
        className=" grid place-items-center "
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 100, y: "0px" }}
        transition={{ type: "keyframes", stiffness: 100 }}
      >
        <motion.div
          className="flex flex-row gap-96 p-5  outline outline-slate-400 rounded-2xl  max-w-7xl  m-5  "
          initial={{ opacity: 0, y: "0px" }}
          animate={{ opacity: 100, y: "0px" }}
        >
          <img src={logo} width={215} />
          <div></div>
          <div className="flex-none">
            <div className="flex flex-col text-center bg-white p-6 text-2xl  text-black rounded-lg">
              <h3>SCORE</h3>
              <motion.h1
                key={score}
                className="font-sans font-extrabold text-5xl text-center text-slate-700 font"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
              >
                {score}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
export default Nav;
