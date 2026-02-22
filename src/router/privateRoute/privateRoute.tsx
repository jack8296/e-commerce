import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
//react-router
import { Outlet, Navigate } from "react-router";

export const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
