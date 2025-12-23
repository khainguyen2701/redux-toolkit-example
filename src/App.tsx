import { Activity } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetPokemonByNameQuery } from "@/services/pokemon";
import { useLoginMutation } from "@/services/login";
import { filterSlice } from "@/redux/features/filter.slice";

function App() {
  const { data, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const [login, { isLoading: loadingLogin, data: dataLogin }] =
    useLoginMutation();

  const {
    actions: { search },
  } = filterSlice;

  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{filters?.search ? filters?.search : "Vite + React"}</h1>
      <button onClick={() => dispatch(search("Hello world"))}>Hello</button>
      <button
        onClick={() =>
          login({
            email: "khai.nguyen1@gmail.com",
            password: "123456",
          })
        }
      >
        Login
      </button>{" "}
      <Activity mode={isLoading ? "hidden" : "visible"}>
        <p className="read-the-docs">{`Hello pokemon ${data?.name}`}</p>
      </Activity>
    </>
  );
}

export default App;
