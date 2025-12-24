import { useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/type";
import { useLoginMutation } from "@/services/lotus/endpoints/auth";
import { Navigate } from "react-router";

const Login = () => {
  const [login, { isLoading: loadingLogin }] = useLoginMutation();

  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );

  if (accessToken) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <button
        disabled={loadingLogin}
        onClick={() =>
          login({
            email: "john_doe@example.com",
            password: "password123",
          })
        }
      >
        Login
      </button>{" "}
    </div>
  );
};

export default Login;
