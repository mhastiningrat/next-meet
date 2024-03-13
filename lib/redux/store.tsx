"use client";
import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    loading: loadingSlice,
  },
});
