import axios from '../instance';

export const logIn = (data: any) => axios.post('/auth/login', data);
export const register = (data: any) => axios.post('/auth/signup', data);
export const fetchProfile = () => axios.get('/auth/getprofile');
export const editProfile = (data: any) => axios.put('/auth/edit-profile', data);
