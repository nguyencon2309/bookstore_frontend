import axiosClient from "../utils/customFetch";
import { type Author } from "../type";
interface ResponseGener{
    message?:string,
    list?:Author[]
}
interface formAuthor{
    name?:string
}

export const authorApi = {
    getList:()=>{
        const url = `/author/getAll`;
        return axiosClient.application.get<ResponseGener>(url)
    },
    addAuthor:(name:string)=>{
        const url = `/author/create`;
        return axiosClient.application.post(url,{"name":name});
    }
}