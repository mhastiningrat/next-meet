"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  {
    show: false,
  },
];

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<any>) => {
      const { id, title, duration, note, host, location } = action.payload;
      if (!state[0].show) {
        state[0].show = true;
      } else {
        state[0].show = false;
      }
    },
  },
});

export const { setShow } = loadingSlice.actions;
export default loadingSlice.reducer;
