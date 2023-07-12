import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";

import NoRouteFound from "./NoRouteFound";
import User from "../pages/User/User";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      {/* <Route element={<ProtectedRoute />}> */}
      <Route exact path="/user" element={<User />} />
      {/* </Route> */}

      <Route path="*" element={<NoRouteFound />} />
    </Routes>
  );
};

export default RoutesComponent;
