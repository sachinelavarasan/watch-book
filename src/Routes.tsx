/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import { FaBeer } from 'react-icons/fa';
// import './App.css';
import { RootState, useAppDispatch, useAppSelector } from './redux/store';
import { Button } from '@mui/material';
import { increment } from './redux/slices/counterSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Routers() {
  // const { value } = useAppSelector((state: RootState) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FaBeer /> Edit <code>src/App.tsx</code> and save to reload.{value}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          Contained
        </Button>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
