import axiosClient from '../utils/customFetch';
interface FormData {
    email:String,
    password:String,
    name:String
}
const UserAPI = {
  login: (formData:FormData) => {
    const url = `/user/register`;
    return axiosClient.applicationNoAuth.post(url, formData);
  },
};

export default UserAPI;