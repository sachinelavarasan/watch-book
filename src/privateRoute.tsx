/* eslint-disable react/prop-types */
import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { fetchProfile } from './redux/slices/authSlice';
import { useAppDispatch } from './redux/store';
import React from 'react';

/** checks and returns the token in the localstorage */
const isAuthenticated = () => {
  const token = localStorage.getItem('jwtToken');
  return token;
};

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const token = React.useRef(isAuthenticated()).current;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(
        fetchProfile(() => {
          navigate('/', { replace: true });
        }),
      );
    } else {
      navigate('/', { replace: true });
    }
  }, [token, history, dispatch]);

  return <>{children}</>;
};

export const LoginRoute = ({ children }: any) => {
  if (isAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};
