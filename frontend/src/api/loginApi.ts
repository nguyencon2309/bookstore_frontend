import axiosClient from '../utils/customFetch';
interface FormData {
    email:String,
    password:String
}
const LoginAPI = {
  login: (formData:FormData) => {
    const url = `/auth/login`;
    return axiosClient.applicationNoAuth.post(url, formData);
  },
};

export default LoginAPI;