import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import {AdminDashboard} from "../pages/AdminDashboard";
import  Login  from "../pages/Login";
import Books from "../pages/Book";
import MainLayout from "../layout/MainLayout";
import { BookDetail } from "../pages/BookDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
         
        
          {/* <Route path="/admin/dashboard" element=   {<AdminDashboard />} /> */}
          <Route path="/" element={<Books/> }/>
          <Route path="/book/:id" element={<BookDetail/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
