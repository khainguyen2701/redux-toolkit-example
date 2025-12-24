import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../redux/type";
import { logout, setTokens } from "@/redux/features/auth.slice";
const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://lotus-sessionm-api.onrender.com/",
  // credentials: "include", // ⚠️ cookie refresh token
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    if (state.auth.accessToken) {
      headers.set("authorization", `Bearer ${state.auth.accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  let isRefreshToken = false;

  if (result.error?.status === 401) {
    if (!isRefreshToken) {
      isRefreshToken = true;
    }

    const refreshResult = await rawBaseQuery(
      { url: "/api/v1/ms-auth/refresh-token", method: "POST" },
      api,
      extraOptions
    );
    isRefreshToken = false;

    if (refreshResult.data) {
      const { accessToken, refreshToken } = refreshResult.data as {
        accessToken: string;
        refreshToken: string;
      };

      api.dispatch(setTokens({ accessToken, refreshToken }));
      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
