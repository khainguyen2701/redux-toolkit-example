import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: "",
    refresh_token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.access_token = action.payload;
    },
    logout: (state) => {
      state.access_token = "";
      state.access_token = "";
    },
  },
});

export const { logout, setRefreshToken, setToken } = authSlice.actions;
