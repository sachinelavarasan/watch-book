import * as yup from 'yup';
// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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

export const editProfileSchema = yup.object({
  email: yup.string().email().required(),
  orgName: yup.string().required('organisation name is required'),
  name: yup.string().required(),
  orgAddress: yup.string(),
  // phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});
