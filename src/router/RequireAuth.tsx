import type { RootState } from "@/redux/type";
import { useAppSelector } from "@/redux/hooks";
import { Navigate, Outlet } from "react-router";

export default function RequireAuth() {
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );

  console.log("accessToken", accessToken);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
