import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "step",
  initialState: {
    step: 1,
  },
  reducers: {
    incrementStep: (state) => {
      state.step += 1;
    },
    reset: (state) => {
      state.step = 1;
    },
  },
});

export const { incrementStep, reset } = stepSlice.actions;
export default stepSlice.reducer;
