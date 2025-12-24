import { combineReducers } from "@reduxjs/toolkit";
import { serverReducers } from "./server";
import { clientReducers } from "./client";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // ✅ CHỈ auth
};

const rootReducer = combineReducers({
  ...serverReducers,
  ...clientReducers,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
