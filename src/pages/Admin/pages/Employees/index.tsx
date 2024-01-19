import React from 'react';

import { EmployeesContainer } from './elements';
import { AddEmployee } from './components/AddEmployee';
import { EmployeesList } from './components/EmployeesList';

export const Employees = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <EmployeesContainer>
      <EmployeesList handleOpen={handleOpen} />
      <AddEmployee handleOpen={handleOpen} open={open} />
    </EmployeesContainer>
  );
};
