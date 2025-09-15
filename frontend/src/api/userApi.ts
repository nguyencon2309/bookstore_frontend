import axiosClient from '../utils/customFetch';
interface FormData {
    email:String,
    password:String,
    name:String
}
const UserAPI = {
  register: (formData:FormData) => {
    const url = `/user/register`;
    return axiosClient.applicationNoAuth.post(url, formData);
  },
  logout : () =>{
    const url = `/user/logout`;
    return axiosClient.application.get(url);
  }
};

export default UserAPI;