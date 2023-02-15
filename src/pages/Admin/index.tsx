/* eslint-disable no-unused-vars */
import '../../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../common/Navbar';

export const AdminRoutes = () => {
  return (
    <div className="App">
      <div className="app-main-container">
        <Navbar />
        <div className="components">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Dashboard</h1>
                </>
              }
            />
            <Route
              path="/details"
              element={
                <>
                  <h1>details</h1>
                </>
              }
            />
            <Route
              path="/employees"
              element={
                <>
                  <h1>employees</h1>
                </>
              }
            />
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
    </div>
  );
};
