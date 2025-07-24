import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UnauthRoute from "./UnauthRoute";
import SignIn from "../pages/Auth/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const Router: React.FC = () => {
  return (
    <Routes>

      <Route
        path="/signin"
        element={
          <UnauthRoute>
            <SignIn />
          </UnauthRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <UnauthRoute>
            <SignUp />
          </UnauthRoute>
        }
      />
    
      <Route
        path="/"
        element={
          <UnauthRoute>
            <Landing />
          </UnauthRoute>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />


      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default Router;
