import React, { useEffect } from 'react';

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import Button from '../../../../../../common/Button';
import Empty from '../../../../../../common/Empty';
import MoreOption from '../../../../../../common/MoreOption';
import DropdownOption from '../../../../../../common/MoreOption/component/DropdownOption';
import { SelectField } from '../../../../../../common/Select';
import { Status } from '../../../../../../common/Status';
import Table from '../../../../../../common/Table';
import SkeletonLoader from '../../../../../../common/SkeletonLoader';

import { useAppDispatch, useAppSelector } from '../../../../../../redux/store';
import { getEmployees } from '../../../../../../redux/slices/employeesSlice';
import { EmployeesListContainer } from './elements';
import { useTheme } from '@emotion/react';

export const EmployeesList = ({ handleOpen }: { handleOpen: () => void }) => {
  const theme: any = useTheme();
  const { employees, isLoading } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployees('ss', () => {}));
  }, []);

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        Cell: (originalRow: { row: { original: any } }, index: number) => (
          <>
            {originalRow.row.original?.firstName || ''}
            {originalRow.row.original?.lastName || ''}
          </>
        ),
        accessor: 'firstName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'DOB',
        accessor: 'dob',
      },
      {
        id: 'status',
        Header: 'Status',
        Cell: (originalRow: { row: { original: any } }, index: number) => (
          <Status statusValue={originalRow.row.original?.status} statusLabel="Inactive" />
        ),
        accessor: 'status',
      },
      {
        id: 'more-option',
        Header: 'Status',
        Cell: () => (
          <MoreOption>
            <DropdownOption
              label="Edit"
              onClick={() => {
                alert('hello');
              }}
              startIcon={<FiEdit color="#ffffff" className="dropdown-icon" />}
            />
            <DropdownOption
              label="Delete"
              onClick={() => {
                alert('hello');
              }}
              isDelete={true}
              startIcon={<RiDeleteBin6Line color="#fff" className="dropdown-icon" />}
            />
          </MoreOption>
        ),
        accessor: 'dob',
      },
    ],
    [employees],
  );

  let arr = [
    { label: 'hj1', value: 'dd1' },
    { label: 'hj2', value: 'dd2' },
    { label: 'hj3', value: 'dd3' },
  ];

  return (
    <EmployeesListContainer>
      <div className="component-title" style={theme.componentTitle}>
        Employees
      </div>
      <div className="list-container">
        <div className="flex justify-between items-center mb-4">
          <SelectField
            id="select"
            label="Select"
            options={arr}
            autoWidth={false}
            multiple={false}
            native={false}
            placeholder="select"
            flexType="row"
            isLabel={false}
            value={arr[0]}
          />
          <Button
            style={{ height: 'min-content', marginLeft: 'auto' }}
            labelStyle={{ color: theme.buttonStyle.color, textTransform: 'Capitalize' }}
            label="Add Employee"
            size="small"
            variant="contained"
            isLoading={false}
            onClick={handleOpen}
          />
        </div>

        {employees.length > 0 && !isLoading && <Table columns={columns} data={employees} />}
        {isLoading && <SkeletonLoader height={400} />}
        {!employees.length && !isLoading && (
          <Empty
            title="No Employees Found !"
            subtitle="Looks likes there are no employees are added in your organisation"
          />
        )}
      </div>
    </EmployeesListContainer>
  );
};
