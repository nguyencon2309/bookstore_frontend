import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="items-center bg-gray-200 min-h-screen ">
      <Navbar />
      <div className="w-[90vw] m-auto">
      <main >
        <Outlet /> {/* đây chính là chỗ render page con */}
      </main>
      </div>
    </div>
  );
};

export default MainLayout;
