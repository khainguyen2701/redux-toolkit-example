import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filterSlice } from "./reducers/filter.slice";
import { lotusApi } from "../services/login";
import { authSlice } from "./reducers/auth.slice";
import { appConfigSlice } from "./reducers/appConfig.slice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [lotusApi.reducerPath]: lotusApi.reducer,
    [appConfigSlice.name]: appConfigSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
