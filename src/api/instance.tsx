import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7000',
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('jwtToken');
    const headers = { ...config.headers };
    headers.set('Authorization', `Bearer ${token}`);
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default instance;
