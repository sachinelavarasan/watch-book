import axios from '../instance';

export const logIn = (data: any) => axios.post('/auth/signin', data);
export const register = (data: any) => axios.post('/auth/signup', data);
export const fetchProfile = () => axios.get('/auth/getprofile');
