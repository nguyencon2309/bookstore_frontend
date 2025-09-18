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
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/book" style={{ marginRight: "10px" }}>Books</Link>
      {!account?.name?
      (<Link to="/login">Login</Link>)
      :
      (
        <div className="flex items-center gap-2">
          <span>👤 {account?.name}</span>
          <button onClick={handleLogout} className="text-red-500">
            Logout
          </button>
        </div>
      )
      }
      
    </nav>
  );
};

export default Navbar;