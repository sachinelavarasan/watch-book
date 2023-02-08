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
              <Route path="dashboard" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
