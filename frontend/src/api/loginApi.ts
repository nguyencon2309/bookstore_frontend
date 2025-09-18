import axiosClient from '../utils/customFetch';
export interface LoginForm {
    email:String,
    password:String
}
export interface LoginResponse {
  message: string;
  token?: string;
  role?: string;
  user?: string;
}
const LoginAPI = {
  login: (formData:LoginForm) => {
    const url = `/user/login`;
    return axiosClient.applicationNoAuth.post<LoginResponse>(url, formData);
  },
};

export default LoginAPI;