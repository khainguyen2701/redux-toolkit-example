import { pokemonApi } from "@/services/pokemon";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { serverReducers } from "@/redux/reducers/server";
import { clientReducers } from "@/redux/reducers/client";

export const store = configureStore({
  reducer: {
    ...serverReducers,
    ...clientReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
