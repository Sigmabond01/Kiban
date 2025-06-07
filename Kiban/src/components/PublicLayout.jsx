import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";

const PublicLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default PublicLayout;
