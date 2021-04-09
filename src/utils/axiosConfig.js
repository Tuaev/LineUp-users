import axios from 'axios';

// Axios config. Returns response or Promise reject (Error) with message.
const axiosInstance = axios.create({
  baseURL: 'https://reqres.in',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
