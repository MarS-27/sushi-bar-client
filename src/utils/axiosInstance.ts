import axios from 'axios';
import configuration from '../configuration';

const axiosInstance = axios.create({
  baseURL: configuration.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${configuration.apiToken}`,
  },
});

export default axiosInstance;
