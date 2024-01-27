import { Controller, useForm } from 'react-hook-form';
import { Divider } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '../../../../../../common/Modal';
import { TextInput } from '../../../../../../common/TextInput';
import Button from '../../../../../../common/Button';

import { addEmployeeSchema } from '../../../../../../utils/validation';

import CloseIcon from '../../../../../../assets/close-modal.svg';

interface AddEmployeeProps {
  handleOpen: () => void;
  open: Boolean;
}

export const AddEmployee = ({ handleOpen, open }: AddEmployeeProps) => {
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

  return (
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
                    id="outlined-basic"
                    errorMessage={errors.name?.message}
                    error={!!errors.name}
                    placeholder="Name"
                  />
                )}
                name="name"
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
  );
};
