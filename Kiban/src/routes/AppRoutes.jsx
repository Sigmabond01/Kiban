import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/PublicLayout";
import DashboardLayout from "../components/DashboardLayout";
import AboutSection from "../features/About/AboutSection";
import React, { lazy, Suspense } from "react"

const LevelN5 = lazy(() => import("../pages/LevelN5"))
const LevelN4 = lazy(() => import("../pages/LevelN4"))


const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Hero />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/About" element={<AboutSection />} />
        <Route path="/About/N5" element={<LevelN5 />} />
        <Route path="/About/N4" element={<LevelN4 />} />
      </Route>
    </Routes>
    </Suspense>
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