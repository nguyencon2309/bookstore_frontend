import axios,{type AxiosInstance} from 'axios';
import queryString from 'query-string';
const baseURL = import.meta.env.VITE_API_URL;

interface AxiosClient{
    application: AxiosInstance;
    applicationNoAuth: AxiosInstance;
    formData: AxiosInstance;
}

const axiosClient:AxiosClient = {
  application: axios.create({
    baseURL,

    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
  }),

  applicationNoAuth: axios.create({
    baseURL,

    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
  }),

  formData: axios.create({
    baseURL,

    headers: {
      'content-type': 'multipart/form-data',
    },
  }),
};

export default axiosClient;