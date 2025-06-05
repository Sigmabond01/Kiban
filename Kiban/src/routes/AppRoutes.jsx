import { Routes, Route } from "react-router-dom";
import LevelN5 from "../features/N5/LevelN5";
import LevelN4 from "../features/N4/LevelN4";
import Hero from "../components/Hero";
import PublicLayout from "../components/PublicLayout";
import DashboardLayout from "../components/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Hero />} />
  </Route>

  <Route element={<DashboardLayout />}>
    <Route path="/JPLT/N5" element={<LevelN5 />} />
    <Route path="/JPLT/N4" element={<LevelN4 />} />
  </Route>
</Routes>
  );
}

function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found!</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

export default AppRoutes;
