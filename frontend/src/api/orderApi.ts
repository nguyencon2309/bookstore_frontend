import axiosClient from '../utils/customFetch';
interface OrderItem {
    book:String,
    quanlity:number,
    price:number
}
interface FormData {
    items:OrderItem[],
    shippingAddress:string,
    paymentMethod:string
}
const OrderAPI = {
  create : (formData:FormData) => {
    const url = '/order'
    return axiosClient.application.post(url,formData)
  },

};

export default OrderAPI;