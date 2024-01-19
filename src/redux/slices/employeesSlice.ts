import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { employees } from '../../utils/employees_raw_data';

export interface EmployeesState {
  error: null;
  isLoading: boolean;
  employees: { [index: string]: unknown }[];
}

const initialState: EmployeesState = {
  error: null,
  isLoading: false,
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<{ [index: string]: unknown }[]>) => {
      state.employees = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const getEmployees = (data: any, callback: Function) => async (dispatch: any) => {
  try {
    dispatch(setIsLoading(true));

    setTimeout(() => {
      dispatch(setIsLoading(false));
      dispatch(setEmployees(employees));
    }, 5000);
  } catch (error: any) {
    dispatch(setError(error?.response?.data?.error || 'Something went wrong.'));
  } finally {
    // dispatch(setIsLoading(false));
  }
};

// Action creators are generated for each case reducer function
export const { setEmployees, setError, setIsLoading } = employeesSlice.actions;

export const employeesReducer = employeesSlice.reducer;
