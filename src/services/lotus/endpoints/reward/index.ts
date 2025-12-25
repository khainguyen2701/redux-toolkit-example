import { lotusApi } from "@/services/lotus";
import type { Response } from "@/services/type";
import type { TiersResponse } from "./type";

export const rewardEndpoints = lotusApi.injectEndpoints({
  endpoints: (builder) => ({
    tiers: builder.query<Response<TiersResponse[]>, void>({
      query: () => ({
        url: "/api/v1/ms-reward/tiers",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((tier) => ({
                type: "reward_type" as const,
                id: tier.id,
              })),
              { type: "reward_type", id: "LIST" },
            ]
          : [{ type: "reward_type", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const { useTiersQuery } = rewardEndpoints;
