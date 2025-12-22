import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./customeBaseQuery";

type LoginResponse = {
  success: boolean;
  data: {
    user_id: string;
    access_token: string;
    refresh_token: string;
  };
  timestamp: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

export const lotusApi = createApi({
  reducerPath: "lotusApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (rest) => ({
        url: "/api/v1/ms-auth/member-portal/sign-in",
        method: "POST",
        body: rest,
      }),
    }),
  }),
});

export const { useLoginMutation } = lotusApi;
