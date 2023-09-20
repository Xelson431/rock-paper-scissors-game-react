import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    score: 0,
  },
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore, decrementScore, reset } = scoreSlice.actions;
export default scoreSlice.reducer;
