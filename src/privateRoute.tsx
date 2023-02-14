/* eslint-disable react/prop-types */
import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { fetchProfile } from './redux/slices/authSlice';
import { useAppDispatch } from './redux/store';

/** checks and returns the token in the localstorage */
const isAuthenticated = () => {
  const token = localStorage.getItem('jwtToken');
  return token;
};

export const PrivateRoute = ({ children }: any) => {
  const token = React.useRef(isAuthenticated()).current;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      dispatch(
        fetchProfile(() => {
          navigate('/');
        }),
      );
    }
  }, [token, history, dispatch]);

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const LoginRoute = ({ children }: any) => {
  if (isAuthenticated()) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};
