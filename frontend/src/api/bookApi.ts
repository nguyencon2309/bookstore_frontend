import axiosClient from '../utils/customFetch';

const BookAPI = {
  getListBook: (params: {
    page?: number;
    search?: string;
    author?: string;
    limit?: number;
    gener?: string;
  }) => {
    const url = "/book/getList";
    return axiosClient.applicationNoAuth.get(url, { params });
  },
  getDetailBook : (id:string) => {
    const url = `/book/${id}`;
    return axiosClient.applicationNoAuth.get(url);
  }
};

export default BookAPI;