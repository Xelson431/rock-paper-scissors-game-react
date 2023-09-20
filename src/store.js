import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import scoreReducer from "./slices/scoreSlice";
import choiceReducer from "./slices/choiceSlice";

const store = configureStore({
  reducer: {
    step: stepReducer,
    score: scoreReducer,
    choice: choiceReducer,
  },
});

export default store;
