import { useNavigate } from "react-router-dom";
import N5Vocabulary from "./N5Vocabulary";
import N5Grammar from "./N5Grammar";
import BubbleChamberLogo from "../../components/Logo";
import { ArrowRight } from "lucide-react";

const LevelN5 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[url('/src/assets/background1.png')] bg-fixed bg-cover bg-center text-white flex flex-col font-noto">
      {/* Blurred overlay background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">


        {/* Header */}
        <div className="text-center py-6 px-4 sm:py-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 tracking-wider">JLPT N5</h1>
          <p className="text-lg sm:text-xl text-white/90 font-light px-2">
            Welcome to the JLPT Level N5 curriculum
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="mb-4 sm:mb-6">
            <N5Vocabulary />
          </div>
          <div className="mb-4 sm:mb-6">
            <N5Grammar />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-4 sm:mx-auto mb-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="text-left">
              <h4 className="text-orange-400 font-bold text-base sm:text-lg mb-2">FOR LISTENING PRACTICE</h4>
              <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">
                For listening practice please click the below button
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a target="_blank" href="https://learnjapaneseaz.com/n5-listening-practice" className="flex-1">
                  <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    Start Listening practice here
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="py-6 sm:py-8 text-center px-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg text-sm sm:text-base"
          >
            Go back to Home
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-14 px-4">
          <a href="/About/N4">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl">
              🚀 Next : JLPT N4
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LevelN5;