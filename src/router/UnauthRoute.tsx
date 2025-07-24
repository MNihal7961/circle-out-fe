import React, { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import type { RootState } from "../store";

interface UnauthRouteProps {
  children: ReactNode;
}

const UnauthRoute: React.FC<UnauthRouteProps> = ({ children }) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const location = useLocation();

  if (accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default UnauthRoute;
