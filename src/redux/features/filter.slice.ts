import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    pagination: 0,
    status: "new",
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
    pagination: (state, action) => {
      state.pagination = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
  },
});
