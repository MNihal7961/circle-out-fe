import React, { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import type { RootState } from "../store";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const location = useLocation();

  if (!accessToken){
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
