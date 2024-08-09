import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../useUserStore";

const PrivateRoute = ({ children }) => {
  const { token } = useUserStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />;
};

export default PrivateRoute;
