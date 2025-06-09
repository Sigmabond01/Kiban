import { Navigate, useNavigate } from "react-router-dom";
import N5Vocabulary from "./N5Vocabulary";
import N5Grammar from "./N5Grammar";
import BubbleChamberLogo from "../../components/Logo";

const LevelN5 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[url('/src/assets/background1.png')] bg-fixed bg-cover bg-center text-white flex  flex-col">
      <BubbleChamberLogo />
      <div className="text-center py-8">
        <h1 className="text-6xl font-bold mb-4 text-white tracking-wider">
          JLPT N5
        </h1>
        <p className="text-xl text-white/90 font-light">
          Welcome to the JPLT Level N5 curriculum
        </p>
      </div>

      <div className="flex-1 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <N5Vocabulary />
        </div>

        <div className="mb-6">
          <N5Grammar />
        </div>
      </div>

      <div className="py-8 text-center">
        <button 
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
        >
          Go back to Home
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-14">
          <a href="/About/N4">
            <button className="px-10 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 text-lg font-semibold transition-all duration-300 shadow-xl">
                 🚀 Next : JPLT N4
            </button>
          </a>
        </div>
    </div>
  );
};

export default LevelN5;
