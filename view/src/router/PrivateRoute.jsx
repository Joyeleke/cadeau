import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../hooks/Auth";

const PrivateRoute = () => {
  const { token } = Auth();
  if (!token) return <Navigate to="auth/login" />;
  return <Outlet />;
};

export default PrivateRoute;
