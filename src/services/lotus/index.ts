import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../customBaseQuery";

export const lotusApi = createApi({
  reducerPath: "lotusApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
