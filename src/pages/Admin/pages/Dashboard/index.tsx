import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Empty from '../../../../common/Empty';
import SkeletonLoader from '../../../../common/SkeletonLoader';
import Table from '../../../../common/Table';
import Modal from '../../../../common/Modal';
import Button from '../../../../common/Button';
import Divider from '@mui/material/Divider';
import { DashboardContainer } from './elements';
import CloseIcon from '../../../../assets/close-modal.svg';
import { TextInput } from '../../../../common/TextInput';
import { addEmployeeSchema } from '../../../../utils/validation';

export const Dashboard = () => {
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
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  );

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  );
  return (
    <DashboardContainer>
      <h1>DashBoard</h1>
      <Button
        style={{ backgroundColor: '#9000B9' }}
        labelStyle={{ color: 'white', textTransform: 'Capitalize' }}
        label="Add Employee"
        size="small"
        variant="contained"
        isLoading={false}
        onClick={handleOpen}
      />
      <Table columns={columns} data={data} />
      <Empty
        title="No Employees Found !"
        subtitle="Looks likes there are no employees are added in your organisation"
      />
      <SkeletonLoader height="350px" width="100%" />
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
                style={{ color: '#9000B9', borderColor: '#9000B9', textTransform: 'Capitalize' }}
              />
            </div>

            <div className="ml-2">
              <Button
                style={{ backgroundColor: '#9000B9', textTransform: 'Capitalize' }}
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
