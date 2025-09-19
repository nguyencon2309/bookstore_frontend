import { Link } from "react-router-dom";
import { useState,useContext,  useEffect } from "react";
import userApi from "../api/userApi";
import { useAuth } from "../contexts/AccountContext";
const Navbar = () => {
    
  const {account,logout} = useAuth()
  
  const handleLogout = async() => {
    console.log("logout")
    
    try{
      const res =await userApi.logout();
      console.log(res);
    }
    catch(err:any){
      console.log(err)
    }
    finally{
      logout();
    }
  }
  return (
    <nav className="w-screen bg-blue-200 color-white p-2 z-3 flex justify-between sticky top-0">
      <Link to="/" className="text-2xl" >BOOKSTORE</Link>
      
      {!account?.name?
      (<Link to="/login" className="text-lg">Login</Link>)
      :
      (
        <div className="flex items-center gap-2">
          <span>👤 {account?.name}</span>
          <button onClick={handleLogout} className="text-red-500 text-lg">
            Logout
          </button>
        </div>
      )
      }
      
    </nav>
  );
};

export default Navbar;