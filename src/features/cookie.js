import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const cookieSlice = createSlice({
  name: "cookie",
  initialState: { value: initialStateValue },
  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = cookieSlice.actions;
export default cookieSlice.reducer;
