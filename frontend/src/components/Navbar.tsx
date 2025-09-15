import { Link } from "react-router-dom";
import { useState } from "react";
import userApi from "../api/userApi";

const Navbar = () => {
  const [user,setUser] = useState(localStorage.getItem("username_bookstore")||null);
  const handleLogout = async() => {
    localStorage.removeItem("username_bookstore");
    localStorage.removeItem("user_Id");
    setUser(null);
    try{
      const res =await userApi.logout();
      console.log(res);
    }
    catch(err:any){
      console.log(err)
    }
    finally{
      
    }
  }
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/book" style={{ marginRight: "10px" }}>Books</Link>
      {!user ?
      (<Link to="/login">Login</Link>)
      :
      (
        <div className="flex items-center gap-2">
          <span>👤 {user}</span>
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