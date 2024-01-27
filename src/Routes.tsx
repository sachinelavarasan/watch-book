/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from '@emotion/react';
// import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { SignUp, Login } from './pages/Auth';
import { LoginRoute, PrivateRoute } from './privateRoute';
import { AdminRoutes } from './pages/Admin';

export const AppRoutes = createBrowserRouter([
  {
    path: '',
    element: (
      <LoginRoute>
        <Login />
      </LoginRoute>
    ),
  },
  {
    path: 'signup',
    element: (
      <LoginRoute>
        <SignUp />
      </LoginRoute>
    ),
  },
  {
    path: 'admin/*',
    element: <AdminRoutes />,
  },
]);

function Routers() {
  const theme: any = useTheme();
  return (
    <div className="App" style={theme.appMainContainer}>
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default Routers;
