import { useNavigate } from "react-router-dom";
import N4Vocabulary from "./N4Vocabulary";
import N4Grammar from "./N4Grammar.";
import BubbleChamberLogo from "../../components/Logo";
import { ArrowRight } from "lucide-react";

const LevelN4 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[url('/src/assets/background1.png')] bg-fixed bg-cover bg-center text-white flex flex-col font-noto">
      {/* Blurred overlay background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <BubbleChamberLogo />

        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-6xl font-bold mb-4 tracking-wider">JLPT N4</h1>
          <p className="text-xl text-white/90 font-light">
            Welcome to the JLPT Level N4 curriculum
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="mb-6">
            <N4Vocabulary />
          </div>
          <div className="mb-6">
            <N4Grammar />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="text-left">
                    <h4 className="text-orange-400 font-bold text-lg mb-2">FOR LISTENING PRACTICE</h4>
                    <p className="text-white mb-4">
                      For listening practice please click the below button
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a target="_blank" href="https://learnjapaneseaz.com/n4-listening-practice" className="flex-1">
                        <button className="w-full px-6 py-3 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                          Start Listening practice here
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

        {/* Navigation Buttons */}
        <div className="py-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
          >
            Go back to Home
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-14">
          <a href="/">
            <button className="px-10 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 text-lg font-semibold transition-all duration-300 shadow-xl">
              🚀 Next : JLPT N3 (COMING SOON!!)
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LevelN4;
