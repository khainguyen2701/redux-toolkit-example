import { pokemonApi } from "@/services/pokemon";
import { lotusApi } from "@/services/lotus";

export const serverReducers = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [lotusApi.reducerPath]: lotusApi.reducer,
};
