/* eslint-disable no-unused-vars */
import { useTheme } from '@emotion/react';

// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../../App.css';
import Navbar from '../../common/Navbar';
// import { socketEvents } from '../../utils/socket';
import { setTheme } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/store';
import { Dashboard, Employees } from './pages';

export const AdminRoutes = () => {
  // const [isConnected, setIsConnected] = useState(socketEvents.connected);
  // const [fooEvents, setFooEvents] = useState([]);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   function onConnect(data: any) {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   function onThemeChanged(data: any) {
  //     console.log(data);
  //     dispatch(setTheme(data.theme));
  //   }
  //   socketEvents.on('privateMessage', onConnect);
  //   socketEvents.on('disconnect', onDisconnect);
  //   socketEvents.on('theme-changed', onThemeChanged);

  //   socketEvents.connect();

  //   return () => {
  //     socketEvents.off('privateMessage', onConnect);
  //     socketEvents.off('disconnect', onDisconnect);
  //     socketEvents.off('theme-changed', onDisconnect);
  //   };
  // }, []);
  const theme: any = useTheme();
  return (
    <div className="app-main-container" style={theme.appMainContainer}>
      <Navbar />
      <div className="component">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/details"
            element={
              <>
                <div>
                  <h1>DETAILS</h1>
                </div>
              </>
            }
          />
          <Route path="/employees" element={<Employees />} />
          <Route
            path="/timelogs"
            element={
              <>
                <h1>Timelog</h1>
              </>
            }
          />
          <Route
            path="/leave"
            element={
              <>
                <h1>leave</h1>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
