import { authSlice } from "@/redux/features/auth.slice";
import { filterSlice } from "@/redux/features/filter.slice";
import { appConfigSlice } from "@/redux/features/appConfig.slice";

export const clientReducers = {
  [filterSlice.name]: filterSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [appConfigSlice.name]: appConfigSlice.reducer,
};
