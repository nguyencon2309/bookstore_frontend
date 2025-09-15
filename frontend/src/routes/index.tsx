import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import {AdminDashboard} from "../pages/AdminDashboard";
import { Login } from "../pages/Login";
import Books from "../pages/Book";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
        
          {/* <Route path="/admin/dashboard" element=   {<AdminDashboard />} /> */}
          <Route path="/book" element={<Books/> }/>
        </Route>

        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
