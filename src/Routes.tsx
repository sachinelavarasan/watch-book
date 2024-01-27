/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@emotion/react';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp, Login } from './pages/Auth';
import { LoginRoute, PrivateRoute } from './privateRoute';
import { AdminRoutes } from './pages/Admin';

function Routers() {
  const theme: any = useTheme();
  return (
    <div className="App" style={theme.appMainContainer}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <LoginRoute>
                <SignUp />
              </LoginRoute>
            }
          />
          <Route
            path="admin/*"
            element={
              <PrivateRoute>
                <AdminRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
