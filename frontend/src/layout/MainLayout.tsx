import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* đây chính là chỗ render page con */}
      </main>
    </div>
  );
};

export default MainLayout;
