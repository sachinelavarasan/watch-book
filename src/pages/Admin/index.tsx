/* eslint-disable no-unused-vars */
import { useTheme } from '@emotion/react';

// import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import { Dashboard, Employees } from './pages';

export const AdminRoutes = () => {
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
