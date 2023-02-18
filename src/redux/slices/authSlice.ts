import { createSlice } from '@reduxjs/toolkit';

import * as authApi from '../../api/auth';

interface authState {
  error: null;
  isLoading: boolean;
  user: any;
}
const initialState: authState = {
  error: null,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    clearUser(state) {
      state.user = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { clearUser, setError, setIsLoading, setUser } = authSlice.actions;

export const logIn = (data: any, callback: Function) => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));

    const response = await authApi.logIn({
      email: data.email,
      password: data.password,
    });

    const { jwtToken, user } = response.data;
    dispatch(setUser(user));

    if (user) {
      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('userId', user.oga_id);

      if (callback) {
        callback();
      }
    }
  } catch (error: any) {
    dispatch(setError(error?.response?.data?.error || 'Something went wrong.'));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const register = (data: any, callback: Function) => async (dispatch: any) => {
  dispatch(setIsLoading(true));

  try {
    await authApi.register(data);
    if (callback) {
      callback();
    }
  } catch (error: any) {
    dispatch(setError(error?.response?.data?.error || 'Something went wrong.'));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const logout = (callBack: Function) => (dispatch: any) => {
  dispatch(clearUser());
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId');
  if (callBack) {
    callBack();
  }
};

export const fetchProfile = (callback?: Function) => async (dispatch: any) => {
  dispatch(setIsLoading(true));
  try {
    const response = await authApi.fetchProfile();

    const { user } = response.data;

    dispatch(setUser(user));

    if (user) {
      if (!localStorage.getItem('userId')) {
        localStorage.setItem('userId', user.oga_id);
      }
    }
  } catch (error: any) {
    if (callback) {
      dispatch(logout(callback));
    }
    dispatch(setError(error?.response?.data?.message || 'Something went wrong.'));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const authSelector = (state: { auth: any }) => state.auth;

export const authReducer = authSlice.reducer;
