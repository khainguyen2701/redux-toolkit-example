import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Login from "@/page/Login";
import Dashboard from "@/page/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
