import { createSlice } from "@reduxjs/toolkit";
export const choiceSlice = createSlice({
  name: "choice",
  initialState: {
    choice: "",
  },
  reducers: {
    choose: (state, action) => {
      state.choice = action.payload;
    },
    reset: (state) => {
      return (state.choice = null);
    },
  },
});

export const { choose, reset } = choiceSlice.actions;
export default choiceSlice.reducer;
