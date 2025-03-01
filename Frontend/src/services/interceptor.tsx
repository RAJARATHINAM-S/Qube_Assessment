import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create();
const API_URL = 'http://localhost:5000/api/';
axiosInstance.interceptors.request.use(
  async (config: any) => {
    const localStorageToken = localStorage.getItem('token');
    const token = localStorageToken ? localStorageToken : '';
    config.baseURL = API_URL;
    config.headers = {
      ...config.headers,
      //   Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error) => {
    return error?.response;
  }
);

export default axiosInstance;
