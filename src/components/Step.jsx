import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import { useDispatch, useSelector } from "react-redux";

import { incrementStep, reset } from "../slices/stepSlice";
function Step() {
  const { step } = useSelector((state) => state.step);

  const stepComponents = {
    1: Step1,
    2: Step2,
    3: Step3,
  };

  const CurrentStepComponent = stepComponents[step];

  return <>{CurrentStepComponent && <CurrentStepComponent />}</>;
}
export default Step;
