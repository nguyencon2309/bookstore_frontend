import axiosClient from "../utils/customFetch";
import { type Gener } from "../type";
interface ResponseGener{
    message?:string,
    list?:Gener[]
}

export const generApi = {
    getList:()=>{
        const url = `/gener/getAll`;
        return axiosClient.applicationNoAuth.get<ResponseGener>(url)
    },
    addGener:(catelogy:string)=>{
        const url = `/gener/create`;
        return axiosClient.application.post(url,{"catelogy":catelogy});
    }
}