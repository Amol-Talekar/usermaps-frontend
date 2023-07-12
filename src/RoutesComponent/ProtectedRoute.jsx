import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const currentToken = localStorage.getItem("userMapsAuthToken");

  return currentToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
