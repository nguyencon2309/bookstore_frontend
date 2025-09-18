import { createContext,useEffect,useState,useContext ,useMemo} from "react";
import {type ReactNode } from "react";
import axiosClient from "../utils/customFetch";

interface AuthContextType {
  token: String | null;
  account: UserInfo | null;
  setToken: React.Dispatch<React.SetStateAction<String | null>>;
  setAccount: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  login: (userInfo: UserInfo, accessToken: string) => void;
  logout: () => void;
}
export const AccountContext = createContext<AuthContextType|undefined>(undefined);
interface AuthProviderProp{
    children:ReactNode
}
interface UserInfo {
    name?:String,
    email?:String,
    role?:String
}

export const AuthProvider:React.FC<AuthProviderProp> = ({children }) => {
    const [token,setToken] = useState<String|null>(localStorage.getItem("access_token")||"");
    const storedUser = localStorage.getItem("user_info");
    const [account,setAccount] = useState<UserInfo|null>(storedUser?JSON.parse(storedUser):null)

    useEffect(()=>{
        console.log("you are here")
        if(token){
            axiosClient.application.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axiosClient.formData.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
        }
        else {
            delete axiosClient.application.defaults.headers.common["Authorization"];
            setAccount(null);
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_info");
        }
    },[token,account]);
    const logout = () => {
        setToken("");
        setAccount(null)
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_info");
        console.log("you are here")
    }
    const login = (userInfo : UserInfo,             accessToken:string)=>{
        localStorage.setItem("user_info", JSON.stringify(userInfo));
        localStorage.setItem("access_token",accessToken);
        setAccount(userInfo);
        setToken(accessToken);
    }
    // const providerValue: AuthContextType=useMemo(()=>{
    //     login,
    //     logout,
    //     token,
    //     setToken,
    //     account,
    //     setAccount
    // },[])
    const providerValue = useMemo(()=>({
        login,
        logout,
        token,
        setToken,
        account,
        setAccount
    }),[token])
    return (
        <AccountContext.Provider value={providerValue} >
            {children}
        </AccountContext.Provider>
    )
}


export const useAuth = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
