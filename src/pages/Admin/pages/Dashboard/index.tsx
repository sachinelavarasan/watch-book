import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import Empty from '../../../../common/Empty';
import { SelectField } from '../../../../common/Select';
import SkeletonLoader from '../../../../common/SkeletonLoader';
import Table from '../../../../common/Table';
import Modal from '../../../../common/Modal';
import Button from '../../../../common/Button';
import Divider from '@mui/material/Divider';
import { DashboardContainer } from './elements';
import CloseIcon from '../../../../assets/close-modal.svg';
import { TextInput } from '../../../../common/TextInput';
import { addEmployeeSchema } from '../../../../utils/validation';
import MoreOption from '../../../../common/MoreOption';
import DropdownOption from '../../../../common/MoreOption/component/DropdownOption';
import { Status } from '../../../../common/Status';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { getEmployees } from '../../../../redux/slices/employeesSlice';

export const Dashboard = () => {
  const { employees, isLoading } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(addEmployeeSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  useEffect(() => {
    dispatch(getEmployees('ss', () => {}));
  }, []);

  const onSubmit = (data: any) => {
    console.log(data, isValid);
    // if (isValid) {
    //   dispatch(
    //     register(e, () => {
    //       navigate('/');
    //     }),
    //   );
    // }
  };

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        Cell: (originalRow: { row: { original: any } }, index: number) =>
          `${originalRow.row.original?.firstName || ''} ${
            originalRow.row.original?.lastName || ''
          }`,
        accessor: 'firstName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dob',
      },
      {
        id: 'status',
        Header: 'Status',
        Cell: <Status statusValue={2} statusLabel="Inactive" />,
        accessor: 'dob',
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
              startIcon={<RiDeleteBin6Line color="#fc3434" className="dropdown-icon" />}
            />
          </MoreOption>
        ),
        accessor: 'dob',
      },
    ],
    [employees],
  );

  let arr = [
    { label: 'hj', value: 'dd' },
    { label: 'hj', value: 'dd' },
    { label: 'hj', value: 'dd' },
  ];
  return (
    <DashboardContainer>
      <h1>DashBoard</h1>
      <SelectField
        id="select"
        label="Select"
        options={arr}
        autoWidth={false}
        multiple={false}
        native={false}
        placeholder="select"
      />
      <Button
        style={{ backgroundColor: '#9000B9' }}
        labelStyle={{ color: 'white', textTransform: 'Capitalize' }}
        label="Add Employee"
        size="small"
        variant="contained"
        isLoading={false}
        onClick={handleOpen}
      />
      {employees.length && !isLoading && <Table columns={columns} data={employees} />}
      {!employees.length && !isLoading && (
        <Empty
          title="No Employees Found !"
          subtitle="Looks likes there are no employees are added in your organisation"
        />
      )}
      {isLoading && <SkeletonLoader height="700px" width="100%" />}
      <Modal isVisible={open} onClose={handleOpen} className="w-2/3 sm:w-3/5 md:w-2/5">
        <div>
          <div className="flex justify-between align-center p-4">
            <div className="text-base font-bold">Add Employee</div>
            <button
              className="border-0 outline-transparent bg-transparent cursor-pointer"
              onClick={handleOpen}>
              <img
                src={CloseIcon}
                alt="close"
                className="close-icon"
                style={{ width: '21px', height: '21px' }}
              />
            </button>
          </div>
          <Divider style={{ borderColor: '#9000db' }} />
          <div className="px-4 py-5">
            <div className="w-full flex justify-between pb-4">
              <div className="w-2/5">
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      label="Name"
                      id="outlined-adornment-email"
                      errorMessage={errors.name?.message}
                      error={!!errors.name}
                      placeholder="Name"
                    />
                  )}
                  name="email"
                />
              </div>
              <div className="w-3/5 ml-4">
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      {...field}
                      label="Email"
                      id="outlined-adornment-email"
                      errorMessage={errors.email?.message}
                      error={!!errors.email}
                      placeholder="Email"
                    />
                  )}
                  name="email"
                />
              </div>
            </div>
          </div>
          <Divider style={{ borderColor: '#9000db' }} />
          <div className="flex justify-end p-4">
            <div>
              <Button
                label="Cancel"
                size="small"
                variant="outlined"
                onClick={handleOpen}
                style={{ color: '#9000B9', borderColor: '#9000B9' }}
              />
            </div>

            <div className="ml-2">
              <Button
                style={{ backgroundColor: '#9000B9' }}
                labelStyle={{ color: 'white' }}
                label="Add Employee"
                size="small"
                variant="contained"
                isLoading={false}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </DashboardContainer>
  );
};
