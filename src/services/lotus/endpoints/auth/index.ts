import { lotusApi } from "@/services/lotus";
import type { LoginRequest, LoginResponse } from "./type";
import { setTokens } from "@/redux/features/auth.slice";

export const authEndpoints = lotusApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/api/v1/ms-auth/member-portal/sign-in",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          setTokens({
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
          })
        );
      },
    }),
    refresh: builder.query<
      { accessToken: string; refreshToken: string },
      { refresh_token: string }
    >({
      query: (body) => ({
        url: "/api/v1/ms-auth/refresh-token",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(
          setTokens({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRefreshQuery } = authEndpoints;
