"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

const initialState: any = [
  {
    id: 1,
    title: "Daily Meeting",
    duration: "30 Minutes",
    note: "Mohon tepat waktu",
    host: "joko",
    location: "offline",
    startDate: "23/03/2024 08:00",
    endDate: "23/03/2024 08:00",
  },
  {
    id: 2,
    title: "Product Discussion",
    duration: "60 Minutes",
    note: "PIC wajib datang",
    host: "mul",
    location: "online",
    startDate: "23/03/2024 08:00",
    endDate: "23/03/2024 08:00",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, duration, note, host, location } = action.payload;
      state.push({
        id,
        title,
        duration,
        note,
        host,
        location,
      });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      let idx = state.findIndex((i: any) => i.id == postId);
      state.splice(idx, 1);
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, duration, note, host, location } = action.payload;
      let idx = state.findIndex((i: any) => i.id == id);
      state.splice(idx, 1, {
        id,
        title,
        duration,
        note,
        host,
        location,
      });
    },
    findPost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      let idx = state.findIndex((i: any) => i.id == postId);
      return state[idx];
    },
  },
});

export const { addPost, deletePost, updatePost, findPost } = postSlice.actions;
export default postSlice.reducer;
