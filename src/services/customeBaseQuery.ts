import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../redux/type";
import { logout, setToken } from "../redux/features/auth.slice";

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const state = api.getState() as RootState;
  const baseQuery = fetchBaseQuery({
    baseUrl: state.appConfig.baseUrl, // state -> app config -> state
    prepareHeaders: (headers) => {
      if (state.auth.access_token) {
        headers.set("authorization", `Bearer ${state.auth.access_token}`);
      }
      return headers;
    },
  });

  let results = await baseQuery(args, api, extraOptions);
  if (results.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: { refreshToken: state.auth.refresh_token },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      const data = refreshResult.data as {
        accessToken: string;
        refreshToken: string;
      };

      api.dispatch(setToken(data.accessToken));

      results = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return results;
};
