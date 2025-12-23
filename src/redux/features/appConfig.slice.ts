import { createSlice } from "@reduxjs/toolkit";

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    baseUrl: "https://pokeapi.co/api/v2/",
    refresh_token: {
      endpoint: "/auth/refresh_token",
      method: "POST",
      body: { refreshToken: "" },
    },
  },
  reducers: {},
});
