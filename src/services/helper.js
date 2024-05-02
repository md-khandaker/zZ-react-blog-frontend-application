import axios from 'axios';
import { getToken } from '../auth';

// export const BASE_URL = 'http://54.165.53.22:9000/api/v1';
export const BASE_URL = 'http://localhost:9000/api/v1';

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
      // console.log(config);
    }

    return config;
  },
  (error) => Promise.reject(error)
);
