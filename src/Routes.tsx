/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import { FaBeer } from 'react-icons/fa';
import './App.css';
import { RootState, useAppDispatch, useAppSelector } from './redux/store';
import { Button } from '@mui/material';
import { increment } from './redux/slices/counterSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './common/Navbar';
import { LoginRoute, PrivateRoute } from './privateRoute';

function Routers() {
  // const { value } = useAppSelector((state: RootState) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-main-container">
          <Navbar />
          <div className="components">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <h1>Dashboard</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/details"
                element={
                  <PrivateRoute>
                    <h1>details</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <PrivateRoute>
                    <h1>employees</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/timelogs"
                element={
                  <PrivateRoute>
                    <h1>Timelog</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path="/leave"
                element={
                  <PrivateRoute>
                    <h1>leave</h1>
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
