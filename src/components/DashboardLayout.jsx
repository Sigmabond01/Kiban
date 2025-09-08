import { Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div className="bg-white text-black">
    <Outlet />
  </div>
);

export default DashboardLayout;
