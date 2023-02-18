import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const signUpSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  cpassword: yup
    .string()
    .required('confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  orgName: yup.string().required('organisation name is required'),
  name: yup.string().required(),
  orgAddress: yup.string(),
});
