import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'universal-cookie';

const { REACT_APP_BASE_URL } = process.env;
const cookies = new Cookies();

export const Api = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

Api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer Token ${accessToken}`;
    }

    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  async (error: Error) => {
    return Promise.reject(error);
  },
);