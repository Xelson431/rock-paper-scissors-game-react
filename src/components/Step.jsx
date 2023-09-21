import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

function Step() {
  const { step } = useSelector((state) => state.step);

  const stepComponents = {
    1: Step1,
    2: Step2,
    3: Step3,
  };

  const CurrentStepComponent = stepComponents[step];

  return (
    <>
      <motion.div
        className=" mt-5 "
        key={step}
        initial={{ y: "-80px", opacity: "2%" }}
        animate={{ y: "20px", opacity: "100%" }}
      >
        {CurrentStepComponent && <CurrentStepComponent />}
      </motion.div>
    </>
  );
}
export default Step;
